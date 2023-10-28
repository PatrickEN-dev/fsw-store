"use client";

import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  PercentCircleIcon,
  ListOrderedIcon,
  HomeIcon,
  LogOutIcon,
  PercentIcon,
  PackageSearchIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import HeaderProfile from "./HeaderProfile";
import Link from "next/link";
import Cart from "../Cart";

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

            <SheetClose asChild>
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <HomeIcon size={16} />
                  Início
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/deals">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <PercentIcon size={16} />
                  Ofertas
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/catalog">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <ListOrderedIcon size={16} />
                  Catálogo
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/orders">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <PackageSearchIcon size={16} />
                  Meus Pedidos
                </Button>
              </Link>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">FSW</span> Store
        </h1>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>

        <SheetContent className="w-[80%]">
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  );
}

export default Header;
