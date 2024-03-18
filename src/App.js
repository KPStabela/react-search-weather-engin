import './App.css';
import Weather from './Weather-App';
import Form from './Form'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <h1>React Weather Search Engine</h1>
      <div className='container application'>
        <Weather />
        <Form />
        <hr />
        <Footer />
      </div> 
    </div>
  );
}

export default App;
