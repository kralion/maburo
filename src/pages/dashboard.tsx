import Filter from "@/components/dashboard/filter";
import DashboardForm from "@/components/dashboard/form";
import { Header } from "@/components/dashboard/header";
import Results from "@/components/dashboard/results";

function Dashboard() {
  return (
    <div className="space-y-7">
      <Header />
      <div className="flex justify-between">
        <div className="space-y-7">
          <DashboardForm />
          <Results />
        </div>
        <div className="row-span-3">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
