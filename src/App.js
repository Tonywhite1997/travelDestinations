import React from "react"
import Header from "./components/header"
import Destinations from "./components/destinations"
import travelCards from "./data"

const App = ()=>{
    const myVisitedCountry = travelCards.map((travelCard)=>{
        return (
            <Destinations 
                title={travelCard.title}
                location={travelCard.location}
                googleMapsUrl={travelCard.googleMapsUrl}
                startDate={travelCard.startDate}
                endDate={travelCard.endDate}
                description={travelCard.description}
                imageUrl={travelCard.imageUrl}
            />
        )
    })
    return (
        <>
            <Header />
            {myVisitedCountry}
        </>
    )
}

export default App;