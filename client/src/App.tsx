import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container mx-auto">
        <body>
          <header>
            <ModeToggle />
          </header>
          <main>
            <div>Hello World</div>
            <Button>Click</Button>
          </main>
          <footer>
            <p>Footer</p>
          </footer>
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App;
