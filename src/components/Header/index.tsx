import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  PercentCircleIcon,
  ListOrderedIcon,
  HomeIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";

function Header() {
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

          <nav className=" mt-2 flex flex-col gap-3">
            <Button
              variant={"outline"}
              className="w-full justify-start gap-2 border-none"
            >
              <LogInIcon size={16} />
              Fazer login
            </Button>

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
