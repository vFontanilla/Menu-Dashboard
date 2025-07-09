import Header from "./components/header"
import MainPage from "./components/main-page";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Toaster richColors position="top-right" />
    </>
  );
}

export default App
