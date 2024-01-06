'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { LoginButton,LogoutButton } from "../../app/auth";

export default function DropdownMenu() {
  return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="md:w-48 py-6 md:text-lg">Username</NavigationMenuTrigger>
            <NavigationMenuContent className="md:w-48 rounded-none">
              <LoginButton className="rounded-none" />
              <LogoutButton className="rounded-none" />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
  );
}
