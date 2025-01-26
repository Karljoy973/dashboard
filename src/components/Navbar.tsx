import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="w-full bg-black flex justify-between">
      <Image src={logo} alt="LG" width={40} />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Link href="/" />
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="border-none"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <Link href="/account">My Account</Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/signIn">Logout</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/billing">Subscription</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
