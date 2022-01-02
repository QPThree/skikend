import React from 'react'
import { useEffect } from 'react'
import { Card, ProgressBar } from 'react-bootstrap'

function MountainDetail({ data }) {

    useEffect(() => {

    }, [])

    const renderCards = () => {
        const cards = data.forecast.map((day, indx) => {
            let year = day.date.slice(-4)
            let month = day.date.slice(3, 5)
            let d = day.date.slice(0, 2)
            let date = new Date(year, month - 1, d)
            return (<Card className="shadow p-3 mb-5 rounded" style={{ backgroundColor: "#dee2e6" }} key={indx}>
                <Card.Title className="detailCardTitle">{day.base.wx_desc} <br/> <span className="smallText">{day.time}</span></Card.Title>
                <Card.Body className="pt-0">

                    
                    <br />
                    <ProgressBar variant="progress" label={`${day.base.temp_f} \xB0`} now={(day.base.temp_f / 40) * 100} />

                    <br />
                    <ProgressBar  variant="progress" label={`Snow ${day.precip_in} \"`} now={(day.precip_in / 6) * 100} />

                    <br />
                    <ProgressBar  variant="progress"  label={`${day.base.windspd_mph} mph`} now={(day.base.windspd_mph / 20) * 100} />

                    <br />
                    <ProgressBar  variant="progress" label={`Visibility ${day.vis_mi} miles`} now={(day.vis_mi / 6) * 100} />
                   
                </Card.Body>
                <Card.Footer style={{ backgroundColor: "#3d405b", color: "#fff" }}>
                    {date.toDateString()}
                </Card.Footer>
            </Card>)

        })
        return cards
    }

    return (
        <>
            <h3 style={{ fontFamily: "Moon Dance", color: "#343a40" }}> {data.name}</h3>
            {renderCards()}
        </>
    )
}

export default MountainDetail
