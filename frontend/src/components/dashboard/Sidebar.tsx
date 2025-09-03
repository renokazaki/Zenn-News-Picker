import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "../../components/ui/sidebar";
import { CalendarPicker } from "./CalendarPicker";
import TaskList from "../TaskList";
import Greeting from "../Greeting";
import type { DateType } from "./Dashboard";

export function AppSidebar({
  date,
  setDate,
  ...props
}: { date: DateType; setDate: (date: DateType) => void } & React.ComponentProps<
  typeof Sidebar
>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-sidebar-border h-16 border-b">
        <Greeting />
      </SidebarHeader>
      <SidebarContent>
        <CalendarPicker date={date} setDate={setDate} />
        <SidebarSeparator className="mx-0" />
        {/* {<TaskList データベースから取得した仮データ/>} */}
        <TaskList />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
