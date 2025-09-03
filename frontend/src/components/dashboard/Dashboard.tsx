import { useState } from "react";
import { Separator } from "../../components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import News from "../News";
import BreadcrumbComponents from "./Breadcrumb";
import { AppSidebar } from "./Sidebar";

export type DateType = Date | undefined;

export default function Dashboard() {
  const [date, setDate] = useState<DateType>(undefined);
  return (
    <SidebarProvider>
      <AppSidebar date={date} setDate={setDate} />
      <SidebarInset>
        <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4 z-50">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <BreadcrumbComponents date={date} />
        </header>

        <main className="flex-1 space-y-6 p-4 md:p-6 lg:p-8">
          {/* ニュースセクション */}
          <section className="space-y-4">
            {/* レスポンシブグリッドコンテナー */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              <News />
            </div>
          </section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
