import "./page.module.css";
import Header from "./components/header";
import RoadMap from "./components/roadmap";
import WhyCrypto from "./components/why-cypto";
import TradeSecure from "./components/trade-secure";
import Features from "./components/features";
import Team from "./components/team";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="App">
      <Header/>
      <WhyCrypto/>
      <RoadMap/>
      <TradeSecure />
      <Features />
      <Team />
      <Footer />
    </div>
  );
}
