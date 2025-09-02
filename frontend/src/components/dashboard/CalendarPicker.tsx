import { Calendar } from "../../components/ui/calendar";
import { SidebarGroup, SidebarGroupContent } from "../../components/ui/sidebar";
import { useState } from "react";

export function CalendarPicker() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <SidebarGroup className="px-0">
      <SidebarGroupContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="[&_[role=gridcell].bg-accent]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]"
        />
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
