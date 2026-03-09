import backGround from "../assets/img/footer-bg.jpg"
import dcLogo from "../assets/img/dc-logo-bg.png"
import facebook from "../assets/img/footer-facebook.png"
import periscote from "../assets/img/footer-periscope.png"
import pinterest from "../assets/img/footer-pinterest.png"
import twitter from "../assets/img/footer-twitter.png"
import youtube from "../assets/img/footer-youtube.png"
import { dcComics } from "../../JS-array/footer"
import { dcShop } from "../../JS-array/footer"
import { dcMain } from "../../JS-array/footer"
import { dcSites } from "../../JS-array/footer"
export default function AppFooter() {
    /*     const dcComics = [
            { id: 1, text: "Characters" },
            { id: 2, text: "Comics" },
            { id: 3, text: "Movies" },
            { id: 4, text: "TV" },
            { id: 5, text: "Games" },
            { id: 6, text: "Videos" },
            { id: 7, text: "News" },
        ] */
    /*     const dcShop = [
            { id: 1, text: "Shop DC" },
            { id: 2, text: "Shop DC Collectables" }
        ] */
    /*     const dcMain = [
            { id: 1, text: "Terms Of Use" },
            { id: 2, text: "Privacy policy (New)" },
            { id: 3, text: "Ad Choices" },
            { id: 4, text: "Advertising" },
            { id: 5, text: "Jobs" },
            { id: 6, text: "Subscription" },
            { id: 7, text: "Talent Workshops" },
            { id: 8, text: "CPSC Certificates" },
            { id: 9, text: "Ratings" },
            { id: 10, text: "Shop Help" },
            { id: 11, text: "Contact us" },
    
    
        ] */
    /*     const dcSites = [
            { id: 1, text: "DC" },
            { id: 2, text: "MAD Magazine" },
            { id: 3, text: "DC Kids" },
            { id: 4, text: "DC Universe" },
            { id: 5, text: "DC Power Visa" },
        ] */

    return (
        <footer className="footer-wrapper">
            <div className="main-footer">
                <div className="footer-bg-wrapper">
                    <img src={backGround} alt="background" className="bg-img" />
                    <img src={dcLogo} alt="DC Logo" className="logo-overlay" />
                </div>


                <div className="container footer-content">
                    <div className="row gap-5">
                        <div className="col-auto">
                            <h3>DC COMICS</h3> {/* DC Comics footer section */}
                            {dcComics.map((comic) => (
                                <ul key={comic.id}>
                                    <li>{comic.text}</li>
                                </ul>
                            ))}
                            <h3>SHOP</h3> {/* DC Shop footer section */}
                            {dcShop.map((shop) => (
                                <ul key={shop.id}>
                                    <li>{shop.text}</li>
                                </ul>
                            ))}
                        </div>


                        <div className="col-auto">
                            <h3>DC</h3> {/* DC Main footer section */}
                            {dcMain.map((main) => (
                                <ul key={main.id}>

                                    <li>{main.text}</li>
                                </ul>
                            )
                            )}
                        </div>
                        <div className="col-auto">
                            <h3>SITES</h3> {/* DC external site footer section */}
                            {dcSites.map((site) => (
                                <ul key={site.id}>
                                    <li>{site.text}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-footer">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center py-4">
                        <div>
                            <button className="social-sign">SIGN-UP NOW!</button>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <span className="follow-us me-3">FOLLOW US</span>
                            <img src={facebook} alt="facebook" />
                            <img src={twitter} alt="twitter" />
                            <img src={youtube} alt="youtube" />
                            <img src={pinterest} alt="pinterest" />
                            <img src={periscote} alt="periscote" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}