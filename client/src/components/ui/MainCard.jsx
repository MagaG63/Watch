function MainCard () {
    return (
        <div className="mainCard">
            <div>
                <h1 className="main_title">
                    <span className="gold">Время</span> как искусство
                </h1>
            </div>
            <div>
                <p className="main_text">Уникальные часы ручной работы, созданные мастерами для ценителей</p>
            </div>
            <div className="main_ordering">
            <button type="main_button" 
            onClick={() => { 
                document.getElementById("ordering")?.scrollIntoView({ behavior: "smooth" });}}>
                    Заказать консультацию
            </button>
            </div>
        </div>
    )
}

export default MainCard;