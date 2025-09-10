import { useState } from "react";
import {
  SidebarInset,
  SidebarProvider,
} from "../../../../components/ui/sidebar";
import News from "./News";
import { AppSidebar } from "../../SideBar/Sidebar";
import type { DateType } from "../../../../type/News.type";
import Header from "../Header/Header";

export default function Dashboard() {
  const [date, setDate] = useState<DateType>(undefined);
  return (
    <SidebarProvider>
      <AppSidebar date={date} setDate={setDate} />
      <SidebarInset>
        <Header date={date} />
        <News selectedDate={date} />
      </SidebarInset>
    </SidebarProvider>
  );
}
