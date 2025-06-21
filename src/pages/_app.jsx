// File: src/pages/_app.jsx
import "@/styles/globals.css";
import { Toaster } from "sonner";
import { useDarkMode } from "@/hooks/useDarkMode";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function App({ Component, pageProps }) {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <Toaster richColors position="top-right" />
      <div className="min-h-screen bg-white text-black dark:bg-background dark:text-white transition-colors duration-300">
        <header className="p-4 flex justify-end">
          <DarkModeToggle darkMode={darkMode} toggle={() => setDarkMode(!darkMode)} />
        </header>
        <main className="px-4 md:px-8">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
