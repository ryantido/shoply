import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EmailVerified() {
  return (
    <Card className="px-4 md:max-w-lg">
      <CardTitle className="text-2xl md:text-4xl">
        Votre email a été vérifié
      </CardTitle>
      <CardDescription className="md:text-base md:-translate-y-2 px-2">
        Votre email a été vérifié avec succès
      </CardDescription>
      <CardContent className="px-2">
        <p>
          Votre email a été vérifié avec succès. Vous pouvez maintenant vous
          profiter pleinement de votre compte.
        </p>
      </CardContent>
      <CardFooter className="px-0">
        <Link href="/" className="w-full">
          <Button className="w-full" size="lg">
            <ArrowLeft className="mr-2 h-4 w-4" /> Aller &agrave; l&apos;accueil
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
