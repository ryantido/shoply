"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type * as z from "zod";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import {
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
  MailIcon,
  User2,
} from "lucide-react";

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
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Checkbox } from "@/components/ui/checkbox";

import { registerSchema } from "@/schema";
import { SignInGoogle, SignUpEmailPassword } from "@/lib/utils";

export default function SignUp() {
  const [visible, setVisible] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      policy: false,
    },
  });

  async function onSubmit(data: z.infer<typeof registerSchema>) {
    try {
      await SignUpEmailPassword(data.name, data.email, data.password);
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
      toast.error("Création du compte impossible", {
        description: "Veuillez vérifier les informations saisies.",
      });
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto rounded-2xl shadow-lg">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-2xl font-semibold">
          Créez votre compte
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Rejoignez <strong>Shoply</strong> en quelques secondes
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <Button
          variant="outline"
          className="w-full flex items-center relative"
          onClick={() => SignInGoogle()}
        >
          <Image
            src="/google-icon-logo-svgrepo-com.svg"
            width={18}
            height={18}
            alt="google logo"
            className="absolute left-3"
          />
          Continuer avec Google
        </Button>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <Separator className="flex-1" />
          ou
          <Separator className="flex-1" />
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Nom complet</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      placeholder="Sarah Miller"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon>
                      <User2 className="h-4 w-4 text-muted-foreground" />
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

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

            <Controller
              name="policy"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className="flex items-center gap-2 text-sm">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="policy"
                    />
                    <label htmlFor="policy">
                      <span className="text-muted-foreground leading-snug">
                        J’accepte les{" "}
                        <Link href="/terms" className="underline">
                          conditions d’utilisation
                        </Link>
                      </span>
                    </label>
                  </div>
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Création du compte…
                </span>
              ) : (
                "Créer mon compte"
              )}
            </Button>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="justify-center text-sm text-muted-foreground">
        <span>Déjà un compte ?</span>
        <Link
          href="/auth/sign-in"
          className="ml-1 font-medium text-primary hover:underline"
        >
          Se connecter
        </Link>
      </CardFooter>
    </Card>
  );
}
