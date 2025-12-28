import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { nextCookies } from "better-auth/next-js";
import { sendMail } from "./utils";
import { emailVerificationHtml, resetPasswordHtml } from "@/constants/mail";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      void sendMail(
        user,
        "Réinitialisation de votre mot de passe",
        resetPasswordHtml(user, url),
      );
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      void sendMail(
        user,
        "Vérification de votre adresse e-mail",
        emailVerificationHtml(user, url),
      );
    },
    sendOnSignUp: true,
    sendOnSignIn: true,
    autoSignInAfterVerification: true,
    expiresIn: 60 * 60,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  session: {
    expiresIn: 15 * 24 * 60 * 60,
    sessionCookieName: "qh_session",
  },
  plugins: [nextCookies()],
});
