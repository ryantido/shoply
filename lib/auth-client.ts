import { createAuthClient } from "better-auth/react";
export const {
  useSession,
  signUp,
  signIn,
  signOut,
  resetPassword,
  requestPasswordReset,
} = createAuthClient();
