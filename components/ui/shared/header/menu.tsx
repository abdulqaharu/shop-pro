import Link from "next/link";
import { Button } from "../../button";
import ModeToogle from "./mode-toggle";
import { EllipsisVerticalIcon, ShoppingBagIcon, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../../sheet";
import UserButton from "./user-button";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs">
        <ModeToogle />
        <Button asChild variant={"ghost"}>
          <Link href="/cart">
            <ShoppingBagIcon /> Cart
          </Link>
        </Button>
       <UserButton />
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVerticalIcon />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ModeToogle />
            <Button asChild variant={"ghost"}>
              <Link href="/cart">
                <ShoppingBagIcon /> Cart
              </Link>
            </Button>
            <UserButton />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
