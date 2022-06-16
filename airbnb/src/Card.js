import star from './images/star.png'

export default function Card({img,status,rating,amount,location,description,pricing}) {
    return(
    <div className="CardHolder">
        <div className="Card" style={{backgroundImage: `url(${img})`}}>
            <div className="Status">{status}</div>
        </div>
        <div className="CardInfo">
            <div className="RatingDiv">
                <img src={star} alt="" className="star" />
                <p className="Rating">&nbsp;{rating}&nbsp;</p>
                <p className="RaterAmount">({amount}) ·&nbsp;</p>
                <p className="Location">{location}</p>
            </div>
            <p className="Description">{description}</p>
            <p className="Pricing"><b>From ${pricing}</b> / person</p>
        </div>
    </div>
    )
}