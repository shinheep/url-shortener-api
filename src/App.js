import './App.css';
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
    </div>
  );
}

export default App;
