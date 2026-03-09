import dcHeader from "../assets/img/dc-logo.png"


export default function AppHeader() {


    const elements = [
        {
            id: 1,
            text: "CHARACTERS",
            url: "#"
        },
        {
            id: 2,
            text: "COMICS",
            url: "#"
        },
        {
            id: 3,
            text: "MOVIES",
            url: "#"
        },
        {
            id: 4,
            text: "TV",
            url: "#"
        },
        {
            id: 5,
            text: "GAMES",
            url: "#"
        },
        {
            id: 6,
            text: "COLLECTIBLES",
            url: "#"
        },
        {
            id: 7,
            text: "VIDEOS",
            url: "#"
        },
        {
            id: 8,
            text: "FANS",
            url: "#"
        },
        {
            id: 9,
            text: "NEWS",
            url: "#"
        },
        {
            id: 10,
            text: "SHOP",
            url: "#"
        }
    ]
    return (
        <header>

            <nav class="navbar navbar-expand-lg">
                <div class="container d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href=""><img src={dcHeader} alt="" className="header-logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">

                            {elements.map((element) => (

                                <li key={element.id} className="nav-item"><a className="nav-link" href={element.url}>{element.text}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    )
}
