import * as React from "react";
import { Plus } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>カテゴリ追加</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
