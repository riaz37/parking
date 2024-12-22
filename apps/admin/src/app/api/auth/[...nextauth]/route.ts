import { authOptions } from "@libs/network/src/config/authOptions";
import NextAuth from "../../../../../types";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
