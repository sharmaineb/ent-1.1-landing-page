import './App.css';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import Content from './components/Content';
import PlantContent from './components/PlantContent';
import CoffeeCards from './components/Cards';
import PlantCards from './components/PlantsCards';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
      <PlantContent />
      <CoffeeCards />
      <PlantCards />
      <Footer />
    </div>
  );
}

export default App;
