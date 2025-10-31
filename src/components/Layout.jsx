import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout({ session }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar session={session} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
