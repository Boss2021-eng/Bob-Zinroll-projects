import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import data from './data';

function App() {
  const heroes = data.map((item) => {
    return <Hero key={item.id} {...item} />;
  });
  return (
    <div className='App'>
      <NavBar />
      {/* <Hero /> */}
      {heroes}
    </div>
  );
}

export default App;
