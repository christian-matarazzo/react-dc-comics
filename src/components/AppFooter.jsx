import backGround from "../assets/img/footer-bg.jpg"
import dcLogo from "../assets/img/dc-logo-bg.png"
import facebook from "../assets/img/footer-facebook.png"
import periscote from "../assets/img/footer-periscope.png"
import pinterest from "../assets/img/footer-pinterest.png"
import twitter from "../assets/img/footer-twitter.png"
import youtube from "../assets/img/footer-youtube.png"
export default function AppFooter() {

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
                            <h3>DC COMICS</h3>
                            <ul>
                                <li>Characters</li>
                                <li>Comics</li>
                                <li>Movies</li>
                                <li>TV</li>
                                <li>Games</li>
                                <li>Videos</li>
                                <li>News</li>
                            </ul>
                            <h3>SHOP</h3>
                            <ul>
                                <li>Shop DC</li>
                                <li>Shop DC Collectibles</li>
                            </ul>
                        </div>


                        <div className="col-auto">
                            <h3>DC</h3>
                            <ul>
                                <li>Terms Of Use</li>
                                <li>Privacy policy (New)</li>
                                <li>Ad Choices</li>
                                <li>Advertising</li>
                                <li>Jobs</li>
                                <li>Subscription</li>
                                <li>Talent Workshops</li>
                                <li>CPSC Certificates</li>
                                <li>Ratings</li>
                                <li>Shop Help</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <h3>SITES</h3>
                            <ul>
                                <li>DC</li>
                                <li>MAD Magazine</li>
                                <li>DC Kids</li>
                                <li>DC Universe</li>
                                <li>DC Power Visa</li>
                            </ul>
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