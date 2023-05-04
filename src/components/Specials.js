import "./styles/Homepage.css";
import greekSalad from "./assets/greek-salad.png";
import bruschetta from "./assets/bruschetta.png";
import lemonDessert from "./assets/lemon-dessert.png";
import deliver from "./assets/deliver.png";
function Specials() {
return (
    <div id={"Specials"}>
    <section className={"specials"}>
    <section className={"specials-header"}>
        <h2>Specials</h2>
        <button className={"order-online"}>Online Menu</button>
    </section>
        <section className={"highlighted-items"}>

            <article className={"special-item"}>
                <img className={"special-picture"} src={greekSalad} alt={"Greek Salad"} />
                <div className={"name-and-price"}>
                    <p className={"item"}>Greek Salad</p>
                    <p className={"price"}>$12.99</p>
                </div>
                <p className={"card-text"}>
                    A refreshing medley of crisp cucumbers, juicy tomatoes,
                    Kalamata olives, and tangy feta cheese, all tossed in
                    a zesty Greek dressing. This vibrant salad is the perfect
                    balance of flavors and textures, making it an ideal appetizer
                    or light meal.
                </p>
                <div className={"order-item"}>
                    <button className={"order-a-delivery"}>Order a Delivery</button>
                    <img className={"car"} src={deliver} alt={"deliver"}/>
                </div>
            </article>


            <article className={"special-item"}>
                <img className={"special-picture"} src={bruschetta} alt={"bruschetta"}/>
                <div className={"name-and-price"}>
                    <p className={"item"}>Bruschetta</p>
                    <p className={"price"}>$13.99</p>
                </div>
                <p className={"card-text"}>
                    A classic Italian starter featuring toasted slices of crusty bread
                    topped with a delightful mix of fresh tomatoes, basil, garlic, and
                    a drizzle of olive oil. Served with a sprinkle of sea salt and a
                    balsamic glaze, this dish is sure to awaken your taste buds.
                </p>
                <div className={"order-item"}>
                    <button className={"order-a-delivery"}>Order a Delivery</button>
                    <img className={"car"} src={deliver} alt={"deliver"}/>
                </div>
            </article>
            <article className={"special-item"}>
                <img className={"special-picture"} src={lemonDessert} alt={"lemon dessert"}/>
                <div className={"name-and-price"}>
                    <p className={"item"}>Lemon Dessert</p>
                    <p className={"price"}>$7.99</p>
                </div>
                <p className={"card-text"}>
                    These delectable dessert bars combine a buttery shortbread crust with
                    a tangy and sweet lemon filling. Dusted with a light layer of powdered
                    sugar, these zesty treats provide the perfect balance of tartness and
                    sweetness.
                </p>
                <div className={"order-item"}>
                    <button className={"order-a-delivery"}>Order a Delivery</button>
                    <img className={"car"} src={deliver} alt={"deliver"}/>
                </div>
            </article>
        </section>
    </section>
    </div>
);
}
export default Specials;