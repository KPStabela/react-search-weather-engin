import './App.css';
import Weather from './Weather-App';
import Form from './Form'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className='container justify-content-center'>
       <h1>React Weather Search Engine</h1>
        <div className='application'>
         <Form /> 
        <Weather />
        <hr />
        <Footer />
        </div>
        </div>
      </div> 
  );
}

export default App;
