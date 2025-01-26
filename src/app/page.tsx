import DashboardCard from "@/components/dashboard/DashboardCard";
import { Newspaper, Users, Folders, MessageCircle } from "lucide-react";
import PostTable from "@/components/posts/PostTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

export default function Home() {
  return (
    <>
      <div className="flex flex-row p-5 m-5 sd:flex-col">
        <DashboardCard
          title="Posts"
          count={25}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Saved Posts"
          count={25}
          icon={<Folders className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Clients"
          count={25}
          icon={<Users className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Clients"
          count={40}
          icon={<MessageCircle className="text-slate-500" size={72} />}
        />
      </div>

      <AnalyticsChart />
      <PostTable title="latests Posts" limit={6} />
    </>
  );
}
