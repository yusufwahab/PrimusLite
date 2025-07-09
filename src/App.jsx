import Dashboard from "./Dashboard";
import CameraCard from "./CameraCard";
import Header from "./Header";
import LogoLoader from "./LogoLoader";

export default function App() {
  return (
    <div>
      <LogoLoader />
      <Header />
      <Dashboard />
    </div>
  );
}