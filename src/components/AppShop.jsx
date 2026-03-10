
import digitalComics from "../assets/img/buy-comics-digital-comics.png"
import merch from "../assets/img/buy-comics-merchandise.png"
import subscription from "../assets/img/buy-comics-subscriptions.png"
import shops from "../assets/img/buy-comics-shop-locator.png"
import powerVisa from "../assets/img/buy-dc-power-visa.svg"

const shopLinks = [
    { id: 1, img: digitalComics, text: "DIGITAL COMICS" },
    { id: 2, img: merch, text: "DC MERCHANDISE" },
    { id: 3, img: subscription, text: "SUBSCRIPTION" },
    { id: 4, img: shops, text: "COMICS SHOP LOCATOR" },
    { id: 5, img: powerVisa, text: "DC POWER VISA" }
];



export default function AppShop() {
    return (
        <section className="shop">
            <div className="shop-container">
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-5 g-4 align-items-center">
                        {shopLinks.map((shopLink) => (
                            <div className="col d-flex justify-content-center align-items-center shop-item" key={shopLink.id} >
                                <img src={shopLink.img} alt={shopLink.text} srcSet="" className="shop-img" />
                                <span className="shop-text">{shopLink.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}