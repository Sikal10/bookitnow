const Featured = ({item}) => {
    return (
        <div className="featured__item">
            <img className={"featured__item-img"} src={item.img}
                alt=""/>
            <div className={"featured__item-overlay"}>
                <div className={"featured-title"}>
                    <h1>{item.city}</h1>
                    <h2>{item.count}</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;