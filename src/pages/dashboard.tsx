import Filter from "@/components/dashboard/filter";
import DashboardForm from "@/components/dashboard/form";
import { Header } from "@/components/dashboard/header";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="grid grid-flow-row grid-cols-2 gap-7">
        <div>
          <DashboardForm />
        </div>
        <div className="row-span-3">
          <Filter />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
