import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "../../../components/ui/sidebar";
import { CalendarPicker } from "./CalendarPicker";
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-sidebar-border h-16 border-b flex justify-center items-center">
        興味ありそうなNews一覧📰
      </SidebarHeader>
      <SidebarContent>
        <CalendarPicker />
        <SidebarSeparator className="mx-0" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
