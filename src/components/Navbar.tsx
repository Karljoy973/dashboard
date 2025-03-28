import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { User, LogOut, CreditCard } from "lucide-react";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <div className="w-full bg-black flex justify-between">
      <ThemeToggler />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Link href="/">
            <Image src={logo} alt="LG" width={50} />
          </Link>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <Link href="/account">My Account</Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User />
            <Link href="/profile"> Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut />
            <Link href="/signIn"> Logout</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            <Link href="/billing"> Subscription</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
