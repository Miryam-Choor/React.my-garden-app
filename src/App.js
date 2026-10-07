import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Flower from './Flower/Flower';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Flower 
        name="ורד" 
        petalColor="pink" 
        centerColor="darkred" 
      />

      {/*בדיקות לברירת מחדל*/}
      {/*בלי צבע מרכז*/}
      <Flower 
        name="חמניה" 
        petalColor="yellow" 
      />

      {/*בלי עלי כותרת*/}
      <Flower 
        name="כלנית" 
        centerColor="black" 
      />

      {/*רק שם*/}
      <Flower 
        name="יסמין" 
      />
    </div>
  );
}

export default App;
