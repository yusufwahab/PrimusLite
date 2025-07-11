import Dashboard from "./Dashboard";
import CameraCard from "./CameraCard";
import Header from "./Header";
import LogoLoader from "./LogoLoader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}