import React from 'react'
import {useState} from 'react'
import {Container} from 'react-bootstrap'
import MountainCard from './MountainCard'
import MountainDetail from './MountainDetail'

function Home() {
    const [displayMountainDetail, setDisplayMountainDetail] = useState(false)
    const [mountainDetailData, setMountainDetailData] = useState({})

    const handleDisplayMountainDetail = (data) => {
        setDisplayMountainDetail(!displayMountainDetail)
        setMountainDetailData(data)
    }

    return (
        <>
            <Container>
                {displayMountainDetail? <MountainDetail data={mountainDetailData} />: <MountainCard handleDisplayMountainDetail={handleDisplayMountainDetail} />}
            </Container>
        </>
    )
}

export default Home
