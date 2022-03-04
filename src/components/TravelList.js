import './TravelList.css';
import locationIcon from '../assets/location-icon.png'

function TravelList({id, title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {
    return(
        <div className='card-container'>
            <div className="travel-card" key={id}>
                <p className="title">{title}</p>
                <div className="location-google">
                    <img className="location-icon" src={locationIcon} alt="location icon" />
                    <p className="location">{location}</p>
                    {googleMapsUrl && <a className="google-url" href={googleMapsUrl} target="_blank">View on Google Maps</a>}
                </div>
                <div className='date-container'>
                    <p className="date">{startDate}</p>
                    <p className='hyphen'>-</p>
                    <p className="date">{endDate}</p>
                </div>
                <p className="description">{description}</p>
                <img className="img" src={imageUrl} alt="hello"/>
            </div>
        </div>
    
    )
}

export default TravelList;