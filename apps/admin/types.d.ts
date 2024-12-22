import '@libs/network/next-auth'

declare module 'next-auth' {
    interface User {
        uid: string
    }
}
export default NextAuth