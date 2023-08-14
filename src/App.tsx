import { NavBar } from "./components/navbar";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="font-Montserrat">
      <div className="flex ">
        <aside className="px-2">
          <div className="sticky  top-7 w-full">
            <NavBar />
          </div>
        </aside>
        <main role="main" className="w-full bg-slate-100  p-5 rounded-2xl">
          <Dashboard />
        </main>
      </div>

      <footer className="mt-auto"></footer>
    </div>
  );
}

export default App;
