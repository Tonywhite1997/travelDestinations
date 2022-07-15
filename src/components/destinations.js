import React from "react"

const destinations = (props)=>{
    return (
        <main className="main">
            <img src={`./images${props.imageUrl}`} className="images" />
            <div>
                <div className="main__maps">
                <i class="fa-solid fa-location-dot"></i>
                <p className="main__country">{props.location}</p>
                <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="main__country__name">{props.title}</h2>
                <p className="main__date">{props.startDate}-{props.endDate}</p>
                <p className="main__description">{props.description}</p>
            </div>
        </main>
    )
}

export default destinations;