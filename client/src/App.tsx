import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="container mx-auto">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="grid grid-cols-2">
          {" "}
          <header className="col-span-2">
            <div className="flex justify-between items-center">
              //! Navbar
              <ModeToggle />
            </div>
          </header>
          <main className="col-span-2">
            <div className="flex flex-col items-center justify-center">
              <LoginPage />
            </div>
          </main>
          <footer className="col-span-2">
            <div className="flex items-center justify-center ">
              <p>Footer</p>
            </div>
          </footer>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
