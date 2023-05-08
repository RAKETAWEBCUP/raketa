import { Fermeture, Footer, PieChart } from "../../components";
import Chat from "../../layouts/ChatBot";
import { Explore, Hero, Service, ServiceSticky, Simulation } from "../../sections";

function Home() {
  return (
    <div className="root-layoutbg-white dark:bg-dark md-overflow-x-hidden">
      <Hero />
      <div className="relative">
        <ServiceSticky />
        <div className='gradient-03 z-0'/>
        <Explore />
        <div className='gradient-04 z-0'/>
      </div> 
      <Service />
      <Simulation />
      <Footer />
      <Chat />
    </div>
  );
}

export default Home;
