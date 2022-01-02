import React from 'react'
import { useEffect, useState } from 'react'
import { Card, Button, Nav } from 'react-bootstrap'
import axios from 'axios'

function MountainCard({handleDisplayMountainDetail}) {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get('https://api.weatherunlocked.com/api/resortforecast/206004?hourly_interval=12&app_id=766a53bd&app_key=d03176b103f8fcc5de1293561dcfd2bf', {
            headers: {
                Accept: "application/json",
            }
        }).then(result => { setData(result.data) });
    }, [])


    return (
        <Card >
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    {data.country}
                </Card.Text>
                <Button variant="primary" onClick = { () => handleDisplayMountainDetail(data)}>
                    Forecast

                </Button>
            </Card.Body>
        </Card>
    )
}

export default MountainCard
