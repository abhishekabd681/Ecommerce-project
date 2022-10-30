import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Header from './Component/Header/Header';
import Offer from './Component/Offer/Offer';
import Recommendation from './Component/Recommendation/Recommendation';
import Footer from './Component/Footer/Footer'

function App() {
  return (
    <div>
       <Navigation />
       <Header/>
       <Offer />
       <Recommendation />
       <Footer />
    </div>
  );
}

export default App;
