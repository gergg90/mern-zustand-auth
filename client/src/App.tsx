import { Outlet } from "react-router-dom";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "./shared/components/Footer";
import NavBar from "./shared/components/NavBar";

function App() {
  return (
    <div className="container mx-auto my-5">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="grid grid-cols-2 gap-2">
          {" "}
          <header className="col-span-2">
            <div className="flex justify-between items-center ">
              <NavBar />
              <ModeToggle />
            </div>
          </header>
          <main className="col-span-2">
            <div className="flex flex-col items-center justify-center">
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
