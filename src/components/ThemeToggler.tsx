"use client";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const ThemeToggler = () => {
  const [toggle, setToggle] = useState(true);
  const { setTheme } = useTheme();

  const handleToggle = (isChecked: boolean) => {
    setToggle(isChecked);
    setTheme(isChecked ? "light" : "dark");
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center space-x-2">
        <Moon className={toggle ? "text-black" : "text-white"} />
        <Switch
          id="airplane-mode"
          checked={toggle}
          onCheckedChange={handleToggle}
        />{" "}
        <Sun className={toggle ? "text-white" : "text-black"} />
      </div>
    </div>
  );
};

export default ThemeToggler;
