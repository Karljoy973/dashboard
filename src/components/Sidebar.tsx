import Link from "next/link";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import {
  LayoutDashboard,
  Heart,
  Newspaper,
  User,
  CreditCard,
  Settings2,
} from "lucide-react";

const Sidebar = () => {
  return (
    <Command className="flex flex-col w-2xs h-full bg-white rounded-none ">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandSeparator />
        <CommandItem className="rounded-none">
          <LayoutDashboard />
          <Link href="/">Dashboard</Link>
        </CommandItem>
        <CommandSeparator />
        <CommandItem className="rounded-none">
          {" "}
          <Heart />
          <Link href="/favourite">Favourites</Link>
        </CommandItem>
        <CommandSeparator />
        <CommandItem className="rounded-none">
          <Newspaper />
          <Link href="/newsletter">Newsletter</Link>
        </CommandItem>
        <CommandSeparator />
        <CommandSeparator />
        <CommandItem className="rounded-none">
          <User />
          Profile
          <CommandShortcut>Ctrl+P</CommandShortcut>
        </CommandItem>
        <CommandSeparator />
        <CommandItem className="rounded-none">
          <CreditCard />
          Billing
          <CommandShortcut>Ctrl+B</CommandShortcut>
        </CommandItem>
        <CommandSeparator />
        <CommandItem className="rounded-none">
          <Settings2 />
          Settings
          <CommandShortcut>Ctrl+S</CommandShortcut>
        </CommandItem>
        <CommandSeparator />
      </CommandList>
    </Command>
  );
};

export default Sidebar;
