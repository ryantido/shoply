import type { Session } from "@/types";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "@/constants/nav";
import { Activity } from "react";
import { cn } from "@/lib/utils";
import { AppLogo } from "../Logo";
import { MobileMenu, UserMenu } from "./Menu";

export const NavBar = ({ session }: { session: Session }) => {
  return (
    <header className="h-16 px-4 md:h-14 md:px-6 sticky top-0 z-50 shadow shadow-foreground/10 bg-transparent backdrop-blur-lg">
      <section
        className="h-full container mx-auto flex justify-between items-center"
        aria-label="navigation"
      >
        <AppLogo />
        <Activity mode={session?.user.id ? "visible" : "hidden"}>
          <nav className="hidden md:inline-flex gap-x-6">
            {links.map(({ label, href }) => (
              <Link
                className={cn(
                  "after:absolute after:content-[''] after:h-0.5 after:w-0 after:bg-accent-foreground after:rounded-full",
                  "text-sm text-muted-foreground hover:text-foreground transition-colors relative",
                  "after:left-0 after:-bottom-0.5 hover:after:w-full after:transition-[width]",
                )}
                key={label}
                href={href}
              >
                {label}
              </Link>
            ))}
          </nav>
        </Activity>
        <section
          className="hidden md:inline-flex gap-x-px"
          aria-label="authentication actions"
        >
          {!session?.user.id ? (
            <>
              <Link href="/auth/sign-up">
                <Button variant="link" size="lg">
                  créer un compte
                </Button>
              </Link>
              <Link href="/auth/sign-in">
                <Button size="lg">se connecter</Button>
              </Link>
            </>
          ) : (
            <UserMenu session={session} />
          )}
        </section>
        <MobileMenu session={session} />
      </section>
    </header>
  );
};
