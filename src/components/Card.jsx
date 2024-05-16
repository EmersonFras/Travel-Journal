import react from "react"
import PathIcon from "/assets/Path.png"

export default function Card(props) {
    return (
        <>
            <div id="Card">
                <img className = "card--image" src={props.imageUrl} alt = "Image of Location" />
                <div className = "card--info">
                    <div className="card--location-info">
                        <img className="path" src={PathIcon} alt="Path Icon" />
                        <p className="small-text">{props.location.toUpperCase()}</p>
                        <a className= "card--link small-text" href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className="card--title bold-text">{props.title}</h1>
                    <p className="card--dates small-text bold-text">{props.startDate} - {props.endDate}</p>
                    <p className="card--description small-text">{props.description}</p>
                </div>
            </div>
        </>
    )
}