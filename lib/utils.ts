import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { signIn, signOut, signUp } from "./auth-client";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function SignInGoogle() {
  await signIn.social({ provider: "google", callbackURL: "/" });
}

export async function SignOut() {
  await signOut();
  window.location.reload();
}

export async function SignUpEmailPassword(
  name: string,
  email: string,
  password: string,
) {
  try {
    const { data, error } = await signUp.email({
      name,
      email,
      password,
      callbackURL: "/email-verification",
    });
    if (!error) {
      toast.success("Création de compte réussie", {
        description: `Bienvenue ${data?.user.name || data?.user.email}`,
        dismissible: true,
      });
      window.location.href = "/auth/verification";
    }
    toast("Une erreur est survenue lors de la création du compte", {
      description: error?.message,
      dismissible: true,
    });
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    throw new Error("Failed to sign up");
  }
}

// Nodemailer ran into an error. I don't know how to fix it. I'll leave it for now.

// export const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST as string,
//   port: Number(process.env.SMTP_PORT as string),
//   secure: Number(process.env.SMTP_PORT as string) === 465,
//   auth: {
//     user: process.env.SMTP_USER as string,
//     pass: process.env.SMTP_PASS as string,
//   },
// });

export const sendMail = async (
  user: { email: string },
  subject: string,
  html: string,
) => {
  try {
    const response = await fetch(process.env.SMTP_URL!, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: process.env.SMTP_NAME!,
          email: process.env.SMTP_USER!,
        },
        to: [
          {
            email: user.email,
          },
        ],
        subject: subject,
        htmlContent: html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to send mail (status ${response.status}): ${errorText}`,
      );
    }

    return response.json();
  } catch (error) {
    console.error("Error sending mail:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Une erreur est survenue lors de l'envoi du mail.",
    );
  }
};
