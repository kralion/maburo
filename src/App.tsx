import { NavBar } from "./components/navbar";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="font-Montserrat">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap ">
          <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
            <div className="sticky  top-0 w-full">
              <NavBar />
            </div>
          </aside>
          <main
            role="main"
            className="w-full bg-slate-100 sm:w-2/3 md:w-3/4 p-5 rounded-2xl"
          >
            <Dashboard />
          </main>
        </div>
      </div>
      <footer className="mt-auto"></footer>
    </div>
  );
}

export default App;
