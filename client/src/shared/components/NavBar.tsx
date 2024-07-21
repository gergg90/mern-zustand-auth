import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>MENU</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <NavLink
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    to="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      HOME PAGE
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Click here to go home page.
                    </p>
                  </NavLink>
                </NavigationMenuLink>
              </li>

              <NavigationMenuLink asChild>
                <div>
                  <NavLink
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                    to="/login"
                  >
                    <div className="text-sm font-medium leading-none">
                      Login
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Login and create your tasks.
                    </p>
                  </NavLink>

                  <NavLink
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                    to="/register"
                  >
                    <div className="text-sm font-medium leading-none">
                      Register
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Register in the app and create your pending task.
                    </p>
                  </NavLink>
                  <NavLink
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                    to="/profile"
                    title="Profile"
                  >
                    <div className="text-sm font-medium leading-none">
                      Profile
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Go to profile page.
                    </p>
                  </NavLink>
                </div>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavLink to="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavBar;
