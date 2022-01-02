import React from 'react'
import { useEffect } from 'react'
import { Card } from 'react-bootstrap'

function MountainDetail({ data }) {

    useEffect(() => {
        console.log(data)
    }, [])

    const renderCards = () => {
        const cards = data.forecast.map((day, indx) => {

            return (<Card className="shadow p-3 mb-5 bg-white rounded">
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
                <Card.Footer>
                    {day.date}
                </Card.Footer>
            </Card>)

        })
        return cards
    }

    return (
        <>
            {data.name}
            {renderCards()}
        </>
    )
}

export default MountainDetail
