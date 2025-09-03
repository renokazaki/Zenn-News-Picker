import { Calendar } from "../../components/ui/calendar";
import { SidebarGroup, SidebarGroupContent } from "../../components/ui/sidebar";
import type { DateType } from "./Dashboard";

export function CalendarPicker({
  date,
  setDate,
}: {
  date: DateType;
  setDate: (date: DateType) => void;
}) {
  return (
    <SidebarGroup className="px-0">
      <SidebarGroupContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="[&_[role=gridcell].bg-accent]:bg-sidebar-blue [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]"
        />
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
