import { Outlet } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <AppProvider>
      <Header />
      <div className="container min-h-screen mx-auto">
        <Outlet />
      </div>
      <Footer />
    </AppProvider>
  );
}

export default App;
