import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MailCheck } from "lucide-react";

export default function EmailVerification() {
  return (
    <Card className="w-full max-w-md mx-auto rounded-2xl shadow-lg">
      <CardHeader className="space-y-2 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <MailCheck className="h-6 w-6 text-primary" />
        </div>

        <CardTitle className="text-2xl md:text-3xl font-semibold">
          Vérifiez votre adresse e-mail
        </CardTitle>

        <CardDescription className="text-sm text-muted-foreground">
          Encore une dernière étape pour activer votre compte
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 text-sm md:text-base text-gray-900 dark:text-gray-100">
        <p>
          Nous venons d’envoyer un email de vérification à votre adresse. Ouvrez
          le message et cliquez sur le lien de vérification pour finaliser votre
          inscription.
        </p>
        <p className="text-xs text-muted-foreground">
          Pensez à vérifier votre dossier <strong>spam</strong> si vous ne voyez
          rien dans votre boîte de réception.
        </p>
      </CardContent>

      <CardFooter>
        <a
          href="https://mail.google.com/"
          className="w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="w-full">
            Ouvrir ma messagerie
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
