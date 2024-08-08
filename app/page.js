import SiteFeatures from "./components/Features/SiteFeatures";
import Header from "./components/Header/Header";
import HomeHero from "./components/Hero/HomeHero";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <SiteFeatures />  
    </>
  );
}