import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "../../../../components/ui/breadcrumb";
import type { DateType } from "../../../../type/News.type";

const BreadcrumbComponents = ({ date }: { date: DateType }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-sm font-medium">
            {date ? date.toLocaleDateString() : "All Day's News"}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComponents;
