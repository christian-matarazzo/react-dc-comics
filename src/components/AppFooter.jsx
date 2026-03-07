import backGround from "../assets/img/footer-bg.jpg"
import dcLogo from "../assets/img/dc-logo-bg.png"
import facebook from "../assets/img/footer-facebook.png"
import periscote from "../assets/img/footer-periscope.png"
import pinterest from "../assets/img/footer-pinterest.png"
import twitter from "../assets/img/footer-twitter.png"
import youtube from "../assets/img/footer-youtube.png"
export default function AppFooter() {

    return (
        <footer>
            <div className="background-images">
                <img src={backGround} alt="background" srcset="" id="background-footer" />
                <img src={dcLogo} alt="" srcset="" id="dc-logo" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Ciao</h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}