import React from 'react'
import { useEffect } from 'react'
import { Card } from 'react-bootstrap'

function MountainDetail({ data }) {

    useEffect(() => {
       
    }, [])

    const renderCards = () => {
        const cards = data.forecast.map((day, indx) => {
            let year = day.date.slice(-4)
            let month = day.date.slice(3,5)
            let d = day.date.slice(0,2)
            let date = new Date(year,month -1,d)
            return (<Card className="shadow p-3 mb-5 rounded" style={{backgroundColor:"#dee2e6"}} key={indx}>
                <Card.Title>{day.base.wx_desc}</Card.Title>
                <Card.Body>
                    Time: {day.time}
                    <br/>
                    Base Temp: {day.base.temp_f}
                    <br/>
                    Snow: {day.precip_in}"
                    <br/>
                    Wind Speed: {day.base.windspd_mph}
                    <br/>
                    Visibility: {day.vis_mi} miles
                </Card.Body>
                <Card.Footer style={{backgroundColor:"#3d405b", color:"#fff"}}>
                    {date.toDateString()}
                </Card.Footer>
            </Card>)

        })
        return cards
    }

    return (
        <>
           <h3 style={{fontFamily:"Moon Dance", color:"#343a40"}}> {data.name}</h3>
            {renderCards()}
        </>
    )
}

export default MountainDetail
