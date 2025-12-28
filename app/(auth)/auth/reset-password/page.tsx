"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Link from "next/link";
import { toast } from "sonner";
import { ArrowLeft, Info, Loader2, MailIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
} from "@/components/ui/item";

import { resetPasswordSchema } from "@/schema";
import { useRouter } from "next/navigation";
import { ResetPasswordFn } from "@/lib/auth-actions";

export default function ResetPassword() {
  const router = useRouter();
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });
  const { isSubmitting, errors } = form.formState;
  async function onSubmit(data: z.infer<typeof resetPasswordSchema>) {
    try {
      await ResetPasswordFn(data.email);
      toast.success("Lien envoyé", {
        description:
          "Si un compte existe avec cet email, vous recevrez un lien de réinitialisation.",
      });

      router.push("/auth/reset-onboard");
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
          Mot de passe oublié ?
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Entrez votre adresse e-mail et nous vous enverrons un lien de
          réinitialisation.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="gap-4">
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Adresse e-mail</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      type="email"
                      placeholder="name@company.com"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon>
                      <MailIcon className="h-4 w-4 text-muted-foreground" />
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting || !!errors.email}
              onClick={() => console.log("clicked")}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Envoi en cours…
                </span>
              ) : (
                "Envoyer le lien"
              )}
            </Button>
          </FieldGroup>
        </form>

        <Separator />

        <Item variant="outline">
          <ItemMedia variant="icon">
            <Info className="h-4 w-4 text-muted-foreground" />
          </ItemMedia>
          <ItemContent>
            <ItemDescription className="text-sm leading-relaxed">
              Si vous utilisez habituellement la connexion avec Google, vous
              n’avez pas besoin de réinitialiser votre mot de passe.
            </ItemDescription>
          </ItemContent>
        </Item>
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
