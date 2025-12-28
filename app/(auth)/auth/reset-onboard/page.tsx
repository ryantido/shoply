import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export default function ResetOnboard() {
  return (
    <Card className="px-4 md:max-w-lg gap-4">
      <CardTitle className="text-2xl md:text-3xl">
        Réinitialiser mon mot de passe
      </CardTitle>
      <CardDescription className="md:text-base px-2">
        Veuillez suivre les instructions suivantes, afin de poursuivre
        l'opération
      </CardDescription>
      <CardContent className="px-2">
        <p>
          Un email de réinitialisation a été envoyé à votre adresse email.
          Veuillez vérifier votre boite de réception et cliquer sur le lien de
          joint. Si vous n'avez pas reçu d'email, vérifiez votre dossier de
          spam.
        </p>
      </CardContent>
      <CardFooter className="px-0">
        <a
          href="https://mail.google.com/"
          className="w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full" size="lg">
            Ouvrir le service de messagerie
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
