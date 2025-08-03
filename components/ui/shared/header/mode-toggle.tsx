"use client";

import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../dropdown-menu";
import { Button } from "../../button";
import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ModeToogle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect( () => {
    setMounted(true)
  }, [])

  if(!mounted) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0">
          {theme === "system" ? (
            <SunMoonIcon />
          ) : theme === "dark" ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
            Appearance
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={(() => setTheme('system'))}><SunMoonIcon /> System</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={() => setTheme('light')}><MoonIcon /> Light</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}> <SunIcon /> Dark</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
