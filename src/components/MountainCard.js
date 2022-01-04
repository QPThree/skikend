import React from 'react'
import { useEffect, useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import axios from 'axios'

function MountainCard({ handleDisplayMountainDetail }) {
    const [data, setData] = useState({})
    const [sunapeeData, setSunapeeData] = useState({})

    useEffect(() => {
        axios.get('https://api.weatherunlocked.com/api/resortforecast/206004?hourly_interval=12&app_id=766a53bd&app_key=d03176b103f8fcc5de1293561dcfd2bf', {
            headers: {
                Accept: "application/json",
            }
        }).then(result => { setData(result.data) });

        // sunapee mountain axios call and data below here (repeat of above)
        axios.get('https://api.weatherunlocked.com/api/resortforecast/603017?hourly_interval=12&app_id=788f06b2&app_key=329067d7c1d071fabbc2d8b2f14a1df9', {
            headers: {
                Accept: "application/json",
            }
        }).then(result => { setSunapeeData(result.data) });
    }, [])


    return (
        <Container>
            <Card className="mt-3" style={{ backgroundColor: "#dee2e6" }} >
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        {data.country}
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleDisplayMountainDetail(data)}>
                        Forecast

                    </Button>
                </Card.Body>
            </Card>
            <Card className="mt-3" style={{ backgroundColor: "#dee2e6" }} >
                <Card.Body>
                    <Card.Title>{sunapeeData.name}</Card.Title>
                    <Card.Text>
                        {sunapeeData.country}
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleDisplayMountainDetail(sunapeeData)}>
                        Forecast

                    </Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default MountainCard
