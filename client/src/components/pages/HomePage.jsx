import MainCard from '../ui/MainCard'
import Gallery from '../ui/Gallery'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function HomePage({}) {
    const [contents, setContent] = useState([])

    useEffect (() => {
        axios.get('/api/content').then((res) => setContent(res.data))
    }, [])

    return(
    <>
    <MainCard></MainCard>
    <div className="gallery">
        <div className="gallery_header">
            <h2 className="gallery_title">
                Коллекция <span>эксклюзивных</span> часов</h2>
            <p className="gallery_subtitle">
                Каждое изделие создается в единственном экземпляре и отражает
    индивидуальность своего владельца</p>
        </div>

        <div className="cards_container">
        {contents.map(card => (<Gallery content={card}/>
        ))}
        </div>
    </div>
    </>
    )
}
