import './App.css';
import data from './data';
import Header from './components/Header';
import TravelList from './components/TravelList';

function App() {
  const travelPlaces = data.map(place => {
    return (
      <TravelList
        key={place.id}
        {...place} //spreads every item in the object into separate props
        // additionally you could do this:
        // title={place.title}
        // location={place.location}
        // and so on...
      />
    )
  })
  
  return (
    <div className="App">
      <Header />
      <section className="travel-list">
        {travelPlaces}
      </section>
    </div>
  );
}

export default App;
