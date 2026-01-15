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
        // ১. আপনার ব্যাকএন্ড বা ডাটাবেস থেকে ইউজার খুঁজুন
        const res = await fetch("http://localhost:5000/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        });

        const user = await res.json();

        // ২. যদি ইউজার পাওয়া যায় এবং পাসওয়ার্ড মিলে যায় তবে ইউজার অবজেক্ট রিটার্ন করুন
        if (res.ok && user) {
          return user;
        }
        
        // ৩. যদি না মিলে তবে null রিটার্ন করুন (এরর দেখাবে)
        return null;
      }
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt", // Credentials ব্যবহারের সময় এটি অবশ্যই 'jwt' হতে হবে
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };