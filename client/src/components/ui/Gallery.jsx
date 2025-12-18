function Gallery ({ content }) {
    return (
    <div className="oneCard">
        <div className="card_image">
            <img src={content.img} alt={content.title} />
        </div>
        <div className="card_body">
            <h3 className="card_title">{content.title}</h3>
            <p className="card_text">{content.info}</p>
            <span className="card_price"> По запросу</span>
        </div>
    </div>
    )
}

export default Gallery;