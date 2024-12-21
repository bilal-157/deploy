import Image from "next/image";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
   <div>
    <Navbar/>
   <LoginPage/>
   </div>
  );
}
