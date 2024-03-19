import './App.css';
import Weather from './Weather-App';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className='container justify-content-center'>
       <h1>React Weather Search Engine</h1>
        <div className='application'>
        <Weather defaultCity="Orkney"/>
        <hr />
        <Footer />
        </div>
        </div>
      </div> 
  );
}

export default App;
