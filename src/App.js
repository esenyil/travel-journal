import './App.css';
import data from './data';
import Header from './components/Header';
import TravelList from './components/TravelList';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [places, setPlaces] = useState(data)

  const travelPlaces = places.map(place => {
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

  function addPlace(place) {
    setPlaces((prevState) => {
      return [...prevState, place]
    })
  }

  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <div className='left-section'>
          <section className="travel-list">
            {travelPlaces}
          </section>
        </div>
        <div className="right-section">
          <Form addPlace={addPlace} />
        </div>
      </div>
    </div>
  );
}

export default App;
