import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Flower from './Flower/Flower';

function App() {

  const flowersList = [
    { id: 1, name: "ורד", petalColor: "pink", centerColor: "darkred" },
    { id: 2, name: "חמניה", petalColor: "yellow" },
    { id: 3, name: "כלנית", centerColor: "black" },
    { id: 4, name: "יסמין" }
  ];

  return (
    <div className="App">
      <Header />
      
      {flowersList.map((flower) => (
        <Flower 
          key={flower.id} 
          name={flower.name} 
          petalColor={flower.petalColor} 
          centerColor={flower.centerColor} 
        />
      ))}
    </div>
  );
}

export default App;
