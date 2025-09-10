import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "../../../components/ui/sidebar";
import { CalendarPicker } from "./CalendarPicker";
import type { DateType } from "../../../type/News.type";
export function AppSidebar({
  date,
  setDate,
  ...props
}: { date: DateType; setDate: (date: DateType) => void } & React.ComponentProps<
  typeof Sidebar
>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-sidebar-border h-16 border-b flex justify-center items-center">
        興味ありそうなNews一覧📰
      </SidebarHeader>
      <SidebarContent>
        <CalendarPicker date={date} setDate={setDate} />
        <SidebarSeparator className="mx-0" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
