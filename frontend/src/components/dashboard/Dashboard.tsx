import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import News from "../News";
import { AppSidebar } from "./Sidebar";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4 z-50">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-sm font-medium">
                  ここに状態管理で選択した日付を表示したい
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <main className="flex-1 space-y-6 p-4 md:p-6 lg:p-8">
          {/* ニュースセクション */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">
                最新ニュース
              </h2>
            </div>

            {/* レスポンシブグリッドコンテナー */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              <News />
            </div>
          </section>

          {/* 追加のコンテンツ領域（必要に応じて） */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              その他の情報
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* 他のウィジェットやコンテンツ */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="font-semibold">統計情報</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  ここに統計情報を表示
                </p>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="font-semibold">アクティビティ</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  最近のアクティビティ
                </p>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 md:col-span-2 lg:col-span-1">
                <h3 className="font-semibold">クイックアクション</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  よく使う機能へのショートカット
                </p>
              </div>
            </div>
          </section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
