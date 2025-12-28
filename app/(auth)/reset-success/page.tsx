import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function ResetSuccess() {
  return (
    <Card className="px-4 md:max-w-lg">
      <CardTitle className="text-2xl md:text-4xl">
        Votre mot de passe a été réinitialisé
      </CardTitle>
      <CardDescription className="md:text-base md:-translate-y-2 px-2">
        Votre mot de passe a été réinitialisé avec succès
      </CardDescription>
      <CardContent className="px-2">
        <p>
          Votre mot de passe a été réinitialisé avec succès. Vous pouvez
          maintenant vous connecter avec votre nouveau mot de passe.
        </p>
      </CardContent>
      <CardFooter className="px-0">
        <Link href="/auth/sign-in" className="w-full">
          <Button className="w-full" size="lg">
            Se connecter
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
