import SiteFeatures from "./components/Home/Features/SiteFeatures";
import Header from "./components/Header/Header";
import HomeHero from "./components/Home/Hero/HomeHero";
import Products from "./components/Home/Products/Products";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <SiteFeatures />
      <Products />
    </>
  );
}