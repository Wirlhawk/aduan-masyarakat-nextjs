import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/db";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: { username: credentials.username },
                });

                if (
                    user &&
                    (await bcrypt.compare(credentials.password, user.password))
                ) {
                    return user;
                } else {
                    throw new Error("Invalid credentials");
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 30, // 30 days
    },
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.username = user.username;
                token.nama = user.nama;
                token.picture = user.picture;
                token.foto = user.foto;
                token.telp = user.telp;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    id: token.id,
                    username: token.username,
                    nama: token.nama,
                    picture: token.picture,
                    foto: token.foto,
                    telp: token.telp,
                    role: token.role,
                };
            }

            return session;
        },
        
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
