import './App.css';
import Boost from './Components/Boost/Boost';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Statistics from './Components/Statistics/Statistics';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Form/>
      <Statistics/>
      <Boost/>
    </div>
  );
}

export default App;
