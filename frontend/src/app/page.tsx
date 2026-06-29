import LandingPage from "@/components/landing/LandingPage";
import FarmLensFooter from "@/components/layouts/footer/Footer";
import FarmLensNavbar from "@/components/layouts/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <LandingPage />
      <FarmLensFooter/>
      <FarmLensNavbar/>
    </>
  );
}
