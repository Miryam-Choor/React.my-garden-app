import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Flower from './Flower/Flower';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* שליחת ה-props לקומפוננטת Flower */}
      <Flower 
        name="ורד" 
        petalColor="pink" 
        centerColor="darkred" 
      />
    </div>
  );
}

export default App;
