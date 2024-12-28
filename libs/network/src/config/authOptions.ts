import { getServerSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {
  AuthProviderType,
  GetAuthProviderDocument,
  LoginDocument,
  RegisterWithProviderDocument,
} from "../gql/generated";
import { fetchGraphQL } from "../fetch";
import * as jwt from "jsonwebtoken";
import { JWT } from "next-auth/jwt";

const MAX_AGE = 60 * 60;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error("Email and password are required.");
        }

        const { email, password } = credentials;

        try {
          const { data, error } = await fetchGraphQL({
            document: LoginDocument,
            variables: { loginInput: { email, password } },
          });

          if (error) {
            throw new Error("Invalid credentials");
          }

          const uid = data?.login.user.uid;
          const name = data?.login.user.name;
          const image = data?.login.user.image;

          return {
            id: uid,
            name,
            image,
            email,
          };
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],

  debug: true,

  session: {
    strategy: "jwt",
    maxAge: MAX_AGE,
  },

  // Configure JWT settings
  jwt: {
    maxAge: MAX_AGE,

    async encode({ token, secret }): Promise<string> {
      if (!token) {
        throw new Error("Token is undefined");
      }
      const { sub, ...tokenProps } = token;
      // Get the current date in seconds since the epoch
      const nowInSeconds = Math.floor(Date.now() / 1000);
      // Calculate the expiration timestamp
      const expirationTimestamp = nowInSeconds + MAX_AGE;
      return jwt.sign(
        { uid: sub, ...tokenProps, exp: expirationTimestamp },
        secret,
        {
          algorithm: "HS256",
        }
      );
    },
    // Custom JWT decoding function
    async decode({ token, secret }): Promise<JWT | null> {
      // Implement custom JWT decoding logic
      if (!token) {
        throw new Error("Token is undefined");
      }

      try {
        const decodedToken = jwt.verify(token, secret, {
          algorithms: ["HS256"],
        });
        return decodedToken as JWT;
      } catch (error) {
        return null;
      }
    },
  },

  callbacks: {
    // Sign-in callback
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const { id, name, image } = user;

        const existingUser = await fetchGraphQL({
          document: GetAuthProviderDocument,
          variables: {
            uid: id,
          },
        });

        if (!existingUser.data?.getAuthProvider?.uid) {
          const newUser = await fetchGraphQL({
            document: RegisterWithProviderDocument,
            variables: {
              registerWithProviderInput: {
                uid: id,
                type: AuthProviderType.Google,
                image,
                name: name || "",
              },
            },
          });
        }
      }

      return true;
    },
    // Session callback
    async session({ token, session }) {
      // Customize session object based on token data
      if (token) {
        session.user = {
          image: token.picture,
          uid: (token.uid as string) || "",
          email: token.email,
          name: token.name,
        };
      }
      return session;
    },
  },

  // Configure custom pages
  pages: {
    signIn: "/signIn",
  },
};

export const getAuth = () => getServerSession(authOptions);
