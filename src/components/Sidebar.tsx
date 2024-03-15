import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import UserItem from "./UserItem";
import {
  Bell,
  Fuel,
  GlobeLock,
  Inbox,
  ScrollText,
  Settings,
  User,
} from "lucide-react";

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      item: [
        {
          link: "/",
          icon: <User />,
          text: "Profile",
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <Fuel />,
          text: "Billing",
        },
        {
          link: "/",
          icon: <Bell />,
          text: "Notific",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-sidebar-sm md:w-sidebar-md lg:w-sidebar-lg border-r min-h-screen md:p-1 lg:p-4">
      <div className="flex flex-col items-center md:justify-center w-full">
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu, key) => (
              <div
                key={key}
                className="flex flex-col items-center sm:items-center md:items-start lg:items-start"
              >
                <div className="hidden lg:block">
                  <CommandGroup heading={menu.group}>{/* ... */}</CommandGroup>
                </div>
                {menu.item.map((option, optionKey) => (
                  <CommandItem
                    key={optionKey}
                    className={`flex gap-2 cursor-pointer items-center p-4${
                      key === 0 ? "mt-5 sm:mt-0" : ""
                    }`}
                  >
                    {option.icon}
                    {/* smのブレークポイントでテキストを非表示 */}
                    <span className="hidden sm:hidden md:inline">
                      {option.text}
                    </span>
                  </CommandItem>
                ))}
              </div>
            ))}
          </CommandList>
        </Command>
      </div>
    </div>
  );
}
