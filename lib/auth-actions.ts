"use server";

import { toast } from "sonner";
import { requestPasswordReset, signIn } from "./auth-client";

export async function SignInEmailPassword(email: string, password: string) {
  try {
    const { data, error } = await signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (!error) {
      const name =
        data?.user?.name.charAt(0).toUpperCase() + data?.user?.name.slice(1);
      toast.success("Connexion réussie", { description: `Bienvenue ${name}` });
    }
    if (error) throw new Error(error.message);
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    throw new Error("Failed to sign in");
  }
}

export async function ResetPasswordFn(email: string) {
  try {
    const { error } = await requestPasswordReset({
      email,
      redirectTo: "/auth/reset-onboard-2",
    });
    if (!error) {
      toast.success("Lien envoyé", {
        description:
          "Si un compte existe avec cet email, vous recevrez un lien de réinitialisation.",
        dismissible: true,
      });
    }
    if (error) throw new Error(error.message);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to reset password", error as Error);
  }
}
