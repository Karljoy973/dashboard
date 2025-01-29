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
  MessageSquare,
} from "lucide-react";

const Sidebar = () => {
  return (
    <Command className="flex flex-col h-full dark:text-slate-300 bg-clip-padding dark:bg-[#09090b] bg-slate-100 text-slate-700 w-full rounded-none ">
      <CommandInput
        placeholder="Search..."
        className="dark:text-slate-300 bg-clip-padding dark:bg-[#09090b] bg-slate-100 text-slate-700 w-full rounded-none"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandSeparator />
        <CommandItem className=":text-slate-300 dark:bg-[#09090b] bg-slate-100 text-slate-700 w-full rounded-none">
          <LayoutDashboard />
          <Link href="/">Dashboard</Link>
        </CommandItem>
        <CommandSeparator />
        <CommandItem className=":text-slate-300 dark:bg-[#09090b] bg-slate-100 text-slate-700 w-full rounded-none">
          <Heart />
          <Link href="/favourite">Favourites</Link>
        </CommandItem>
        <CommandSeparator />
        <CommandItem className=":text-slate-300 dark:bg-[#09090b] bg-slate-100 text-slate-700 w-full rounded-none">
          <MessageSquare />
          <Link href="/posts">Posts</Link>
        </CommandItem>
        <CommandSeparator />
        <CommandItem className=":text-slate-300 dark:bg-[#09090b] bg-slate-100 text-slate-700 w-full rounded-none">
          <Newspaper />
          <Link href="/newsletter">Newsletter</Link>
        </CommandItem>
        <CommandSeparator />
        <CommandSeparator />
        <CommandItem className=":text-slate-300 dark:bg-[#09090b] bg-slate-100 text-slate-700 w-full rounded-none">
          <User />
          Profile
          <CommandShortcut>Ctrl+P</CommandShortcut>
        </CommandItem>
        <CommandSeparator />
        <CommandItem className=":text-slate-300 dark:bg-[#09090b] bg-slate-100 text-slate-700 w-full rounded-none">
          <CreditCard />
          Billing
          <CommandShortcut>Ctrl+B</CommandShortcut>
        </CommandItem>
        <CommandSeparator />
        <CommandItem className=":text-slate-300 dark:bg-[#09090b] bg-slate-100 text-slate-700 w-full rounded-none">
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
