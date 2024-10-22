import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Logo } from "./Logo.tsx";



export default function App() {
  return (
    <Navbar className="w-full py-4 bg-gray-800 text-violet-400" isBordered>
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit text-xl">SUPPORT SYNC</p> {/* Increased text size */}
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6 flex-grow" justify="center"> {/* Increased gap and flex-grow for even spacing */}
        <NavbarItem>
          <Link color="foreground" href="#" className="text-lg"> {/* Increased text size */}
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary" className="text-lg">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-lg">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
