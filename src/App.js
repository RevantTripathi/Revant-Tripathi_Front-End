
import './App.css';
import List from './List';

function App() {
  const items=[{text:'revant'},{text:'revant2'},{text:'revant3'},{text:'revant4'},{text:'revant5'}]
  return (
    <div className="App">
      app
    <List items={items}/>
    </div>
  );
}

export default App;
