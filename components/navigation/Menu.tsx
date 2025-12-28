import { Bell, Hamburger, User2 } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import type { Session } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { links, menu } from "@/constants/nav";
import { Logout } from "./SignOut";
import { Notifications } from "../Notifications";
import { Toggle } from "../Toggle";

export const MobileMenu = ({ session }: { session: Session }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="md:hidden focus:ring-2 ring-muted-foreground"
          variant="ghost"
          size="icon-lg"
        >
          <Hamburger className="text-gray-800 dark:text-gray-100 size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <nav aria-label="user-menu" role="menu" aria-orientation="vertical">
          {links.map(({ label, href }) => (
            <Link
              className="inline-flex p-2 gap-x-2 hover:bg-accent items-center w-full rounded-md transition-colors text-gray-900 dark:text-gray-100"
              href={href}
              key={label}
            >
              {label}
            </Link>
          ))}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="lg" className="w-full mt-2">
                <User2 /> Mon compte
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <UserMenuContent session={session} />
            </PopoverContent>
          </Popover>
        </nav>
      </PopoverContent>
    </Popover>
  );
};

export const UserMenu = ({ session }: { session: Session }) => {
  return (
    <section className="max-md:hidden flex gap-x-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon-lg"
            className="focus:bg-accent relative group *:transition-all"
            title="Notifications"
          >
            <span className="dot-effect animate-ping" />
            <span className="dot-effect" />
            <Bell className="size-5 text-gray-800 dark:text-gray-100" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-fit">
          <Notifications />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="lg">
            <User2 /> Mon compte
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <UserMenuContent session={session} />
        </PopoverContent>
      </Popover>
    </section>
  );
};

const UserMenuContent = ({ session }: { session: Session }) => {
  return (
    <div role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
      <section
        aria-label="user-info"
        className="inline-flex gap-x-2 items-center mb-4 border-b w-full pb-3"
      >
        <Avatar>
          <AvatarImage
            src={session?.user.image || ""}
            alt={session?.user.name}
          />
          <AvatarFallback>{session?.user.name[0]}</AvatarFallback>
        </Avatar>
        <section aria-label="account-info" className="leading-4">
          <p className="font-semibold">{session?.user.name}</p>
          <span className="text-xs text-muted-foreground">
            {session?.user.email}
          </span>
        </section>
        <Toggle />
      </section>
      <nav aria-label="user-menu" role="menu" aria-orientation="vertical">
        {menu.map(({ label, href, icon: Icon }) => (
          <Link
            className="inline-flex p-2 gap-x-2 hover:bg-accent items-center w-full rounded-md transition-colors text-gray-900 dark:text-gray-100"
            href={href}
            key={label}
          >
            <Icon size={18} /> {label}
          </Link>
        ))}
      </nav>
      <Logout />
    </div>
  );
};
