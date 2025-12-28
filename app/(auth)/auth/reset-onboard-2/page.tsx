"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Link from "next/link";
import { toast } from "sonner";
import { ArrowLeft, Eye, EyeOff, Loader2, LockKeyhole } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

import { resetPasswordSchema } from "@/schema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { resetPassword } from "@/lib/auth-client";

export default function ResetOnboardTwo() {
  const router = useRouter();
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
    },
  });
  const [visible, setVisible] = useState(false);

  async function onSubmit(data: z.infer<typeof resetPasswordSchema>) {
    try {
      const token = new URLSearchParams(window.location.search).get("token");
      if (!token) {
        throw new Error("Token non trouvé");
      }
      const { error } = await resetPassword({
        newPassword: data.password,
        token,
      });
      if (!error) {
        toast.success("Mot de passe réinitialisé", {
          description: "Vous pouvez maintenant vous connecter.",
          dismissible: true,
        });
        router.push("/reset-success");
      }
      if (error) throw new Error(error.message);
    } catch {
      toast.error("Erreur lors de l’envoi", {
        description: "Veuillez réessayer dans quelques instants.",
      });
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto rounded-2xl shadow-lg">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-2xl font-semibold">
          Réinitialisation du mot de passe
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Entrez votre nouveau mot de passe
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="gap-4">
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Mot de passe</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      type={visible ? "text" : "password"}
                      placeholder="••••••••"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon>
                      <LockKeyhole className="h-4 w-4 text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupButton
                      type="button"
                      variant="ghost"
                      aria-label={
                        visible
                          ? "Masquer le mot de passe"
                          : "Afficher le mot de passe"
                      }
                      onClick={() => setVisible((v) => !v)}
                    >
                      {visible ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </InputGroupButton>
                  </InputGroup>
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={
                form.formState.isSubmitting || !!form.formState.errors.password
              }
            >
              {form.formState.isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Réinitialisation en cours…
                </span>
              ) : (
                "Réinitialiser le mot de passe"
              )}
            </Button>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="justify-center text-sm text-muted-foreground">
        <Link
          href="/auth/sign-in"
          className="flex items-center gap-1 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Revenir à la connexion
        </Link>
      </CardFooter>
    </Card>
  );
}
