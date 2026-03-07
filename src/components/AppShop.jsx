import digitalComics from "../assets/img/buy-comics-digital-comics.png"
import merch from "../assets/img/buy-comics-merchandise.png"
import subscription from "../assets/img/buy-comics-subscriptions.png"
import shops from "../assets/img/buy-comics-shop-locator.png"
import powerVisa from "../assets/img/buy-dc-power-visa.svg"

export default function AppShop() {

    return (
        <section className="shop">
            <div className="shop-container">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12 col-md-4 col-lg">
                            <img src={digitalComics} alt="Digital Comics" srcset="" />
                            <span>DIGITAL COMICS</span>

                        </div>
                        <div className="col-12 col-md-4 col-lg">
                            <img src={merch} alt="Digital Comics" srcset="" />
                            <span>DC MERCHANDISE</span>
                        </div>
                        <div className="col-12 col-md-4 col-lg">
                            <img src={subscription} alt="Digital Comics" srcset="" />
                            <span>SUBSCRIPTION</span>
                        </div>
                        <div className="col-12 col-md-4 col-lg">
                            <img src={shops} alt="Digital Comics" srcset="" />
                            <span>COMICS SHOP LOCATOR</span>
                        </div>
                        <div className="col-12 col-md-4 col-lg">
                            <img src={powerVisa} alt="Digital Comics" srcset="" />
                            <span>DC POWER VISA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}