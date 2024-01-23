import Filter from "@/components/dashboard/filter";
import DashboardForm from "@/components/dashboard/form";
import { Header } from "@/components/dashboard/header";
import Results from "@/components/dashboard/results";

function Dashboard() {
  return (
    <div className="space-y-8">
      <Header />
      <div className="flex gap-6">
        <div className="space-y-4">
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
