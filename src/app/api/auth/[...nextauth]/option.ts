import { db } from "@/config/db";
import { NEXTAUTH_SECRET } from "@/lib/constants";
import bcrypt from "bcryptjs";
import { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import 'next-auth'
import { AuthorizedUserProps } from "@/lib/types";
import User from "@/models/user.Model";

type currentSubscribedPlanProps = {
    duration: string,
    preference: string,
    plan: string
}

declare module "next-auth" {
    interface User {
        _id?: string
        userName?: string
        email?: string
        currentSubscribedPlan?: currentSubscribedPlanProps
    }
    interface Session {
        user: {
            _id?: string
            userName?: string
            email?: string
            currentSubscribedPlan?:currentSubscribedPlanProps
        } & DefaultSession["user"]
    }
    interface JWT {
        id?: string
        userName?: string
        email?: string
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",

            credentials: {
                // username: { label: "Username", type: "text" },
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials: Record<"email" | "password", string> | undefined): Promise<AuthorizedUserProps | null> {
                if (!credentials) return null;
                await db()
                try {
                    console.log('---------', credentials)
                    const user = await User.findOne({
                        email: credentials?.email,
                    }).select("+password")
                    if (!user) {
                        throw new Error("User not found. Please create an account.")
                    }

                    // if (!user.isVerified) {
                    //     return 'Please verify your email address'
                    // }

                    const IsPasswordCorrect = await bcrypt.compare(credentials?.password, user.password)
                    if (IsPasswordCorrect) {
                        return user
                    } else {
                        return null
                        // return 'Invalid credentials'
                    };
                } catch (error) {
                    console.log("Error in authorize function", error)
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user._id?.toString()
                token.userName = user.userName
                token.email = user.email
                token.currentSubscribedPlan = user.currentSubscribedPlan
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token.id as string
                session.user.userName = token.userName as string
                session.user.email = token.email as string
                session.user.currentSubscribedPlan = token.currentSubscribedPlan as currentSubscribedPlanProps
            }
            return session
        },
    },
    pages: {
        signIn: '/sign-in',
        signOut: '/sign-out'
    },
    session: {
        strategy: "jwt"
    },
    secret: NEXTAUTH_SECRET
}