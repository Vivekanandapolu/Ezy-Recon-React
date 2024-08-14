import { Outlet } from "react-router-dom";
import GlobalDashboard from "../../Components/common/GlobalDashboard";
import Header from "../../Components/Layouts/Header";

function Home() {
  return (
    <div>
      <Header />
      <GlobalDashboard />
      <Outlet />
    </div>
  );
}

export default Home;
