import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Newspaper, Share, LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  count: number;
    icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className="w-3xs mb-4 mx-4 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-4 pb-0">
      <CardHeader className="antialiased text-nowrap font-serif text-slate-900 dark:text-slate-200 font-bold text-2xl">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex p-2 mx-4">
        {icon}
        <h3 className="text-5xl font-semibold dark:text-slate-200 text-slate-500">
          {count}
        </h3>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
