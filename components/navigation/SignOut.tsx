"use client";

import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { SignOut } from "@/lib/utils";

export const Logout = () => {
  return (
    <Button
      variant="destructive"
      size="lg"
      className="w-full mt-4"
      onClick={() => SignOut()}
    >
      <LogOut size={18} />
      Se deconnecter
    </Button>
  );
};
