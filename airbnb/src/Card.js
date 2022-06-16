import star from './images/star.png'
export default function Card(props) {
    return(
    <div className="CardHolder">
        <div className="Card" style={{backgroundImage: `url(${props.img})`}}>
            <div className="Status">{props.status}</div>
        </div>
        <div className="CardInfo">
            <div className="RatingDiv">
                <img src={star} alt="" className="star" />
                <p className="Rating">&nbsp;{props.rating}&nbsp;</p>
                <p className="RaterAmount">({props.amount}) ·&nbsp;</p>
                <p className="Location">{props.location}</p>
            </div>
            <p className="Description">{props.description}</p>
            <p className="Pricing"><b>From ${props.pricing}</b> / person</p>
        </div>
    </div>
    )
}