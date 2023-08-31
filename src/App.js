import './App.css';
import { Testimonio } from './components/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>This is what our students say about Free Code Camp</h1>
        <Testimonio />
      </div>
    </div>
  );
}

export default App;