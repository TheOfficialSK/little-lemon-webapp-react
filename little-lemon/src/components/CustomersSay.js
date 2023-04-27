import './CustomersSay.css';
import * as PropTypes from "prop-types";
import edward from './assets/edward.png';
import edwardsFood from './assets/edwards-image.png';
import natalie from './assets/natalie.png';
import nataliesFood from './assets/natalies-image.png';
import brad from './assets/brad.png';
import bradsFood from './assets/brads-image.png';
import robert from './assets/robert.png';
import robertsFood from './assets/roberts-image.png';
import star from './assets/star.png';

function Stars(props) {
    const stars = [];
    for (let i = 0; i < props.rating; i++) {
        stars.push(<img className={"star"} src={star} alt={"star"}/>);
    }
    return (
        stars
    );
}

function Review(props) {
    return (
        <div className="review-block">
            <div className="reviewer">
                <img className={"pfp"} src={props.profileImage} alt={props.name} />
                <div className={"name-and-rating"}>
                    <p className={"name"}><strong>{props.name}</strong></p>
                    <div className={"rating-with-stars"}>
                        <p className={"rating-text"}>Rating</p>
                        <Stars rating={props.rating} />
                    </div>
                </div>
            </div>
            <div className="review-content">
                <img className={"foodPic"} src={props.foodImage} alt={props.name} />
                <p className={"review-text"}> {props.foodReview} </p>
            </div>
        </div>
    );
}

Review.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    profileImage: PropTypes.string,
    foodImage: PropTypes.string
};

function CustomersSay() {
return (
<section className="customers-say">

    <h1 className={"testimonials"}>Testimonials</h1>
    <div className={"reviews"}>
        <Review profileImage = {edward} name={"Edward"} rating={5} foodImage={edwardsFood} foodReview={`Compliments to the chef for this wonderful meal`} />
        <Review profileImage = {natalie} name={"Natalie"} rating={4} foodImage={nataliesFood} foodReview={`Wonderful atmosphere, the food
        was delicious!`} />
        <Review profileImage = {brad} name={"Brad"} rating={5} foodImage={bradsFood} foodReview={`One of my go-to places for
        Italian!`} />
        <Review profileImage = {robert} name={"Robert"} rating={3} foodImage={robertsFood} foodReview={`Food was great!, 
        so was the waitress!`} />
    </div>
</section>

);
}
export default CustomersSay;