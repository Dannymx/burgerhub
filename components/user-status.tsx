import { UserCircle2 } from "lucide-react";
import Image from "next/image";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signInAction, signOutAction } from "@/lib/actions/auth";

export const UserStatus = async () => {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {session && session.user && session.user.image ? (
            <div className="aspect-square relative overflow-hidden rounded-full h-2/3">
              <Image src={session.user.image} alt="" fill />
            </div>
          ) : (
            <UserCircle2 size={24} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {session ? (
          <DropdownMenuItem>
            <form action={signOutAction} className="w-full">
              <Button
                size="sm"
                variant="ghost"
                className="w-full flex grow p-0"
              >
                Sign out
              </Button>
            </form>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <form action={signInAction} className="w-full">
              <Button
                size="sm"
                variant="ghost"
                className="w-full flex grow p-0"
              >
                Sign in
              </Button>
            </form>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
