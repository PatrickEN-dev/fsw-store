"use client";

import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  PercentCircleIcon,
  ListOrderedIcon,
  HomeIcon,
  LogOutIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import HeaderProfile from "./HeaderProfile";

function Header() {
  const { status, data } = useSession();
  const handleLoginClick = async () => await signIn();
  const handleLogoutClick = async () => await signOut();

  return (
    <Card className="flex justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === "authenticated" && data?.user && (
            <HeaderProfile data={data} />
          )}

          <nav className=" mt-4 flex flex-col gap-3">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant={"outline"}
                className="w-full justify-start gap-2 border-none"
              >
                <LogInIcon size={16} />
                Fazer login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant={"outline"}
                className="w-full justify-start gap-2 border-none"
              >
                <LogOutIcon size={16} />
                Sair
              </Button>
            )}

            <Button
              variant={"outline"}
              className="w-full justify-start gap-2 border-none"
            >
              <HomeIcon size={16} />
              Inicio
            </Button>

            <Button
              variant={"outline"}
              className="w-full justify-start gap-2 border-none"
            >
              <PercentCircleIcon size={16} />
              Ofertas
            </Button>

            <Button
              variant={"outline"}
              className="w-full justify-start gap-2 border-none"
            >
              <ListOrderedIcon size={16} />
              Pedidos
            </Button>
          </nav>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
}

export default Header;
