import { Container } from "react-bootstrap"

function Gallery ({ content }) {
    return (
        <div className="main_gallery">
            <h2 className="gallery_title">Коллекция уникальный часов</h2>
            <div>
                <h3 className="gallery_text">Каждое изделие создается в единственном экземпляре и отражает индивидуальность своего владельца</h3>
            </div>
            <div className="cards_container">
                <div className="oneCard">
                    <div className="card">
                    {content.img}
                    </div>
                    <div>
                    {content.info}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Gallery;