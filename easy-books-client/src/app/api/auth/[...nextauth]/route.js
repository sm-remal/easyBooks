import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

        // Find user from database
        const res = await fetch("http://localhost:5000/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        });

        const user = await res.json();

        // If user & password match then return the object
        if (res.ok && user) {
          return user;
        }

        // If user & password do not match then return
        return null;
      }
    }),
  ],
  session: {
    strategy: "jwt", 
    maxAge: 30 * 24 * 60 * 60, 
    updateAge: 24 * 60 * 60, 
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true, 
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === "production" 
      }
    }
  },
  callbacks: {
    async jwt({ token, user }) {
      
      if (user) {
        token.id = user._id || user.id;
        token.role = user.role || "user";
      }
      return token;
    },
    async session({ session, token }) {
      
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };