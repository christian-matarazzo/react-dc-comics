import dcHeader from "../assets/img/dc-logo.png"


export default function AppHeader() {


    return (
        <header>

            {/*             <nav className="navbar" id="navbar">


<a href="">CHARACTERS</a>
<a href="" className='active'>COMICS</a>
<a href="">MOVIES</a>
<a href="">TV</a>
<a href="">GAMES</a>
<a href="">COLLECTIBLES</a>
<a href="">VIDEOS</a>
<a href="">FANS</a>
<a href="">NEWS</a>
<a href="">SHOP</a>


</nav> */}



            <nav class="navbar navbar-expand-lg">
                <div class="container d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href=""><img src={dcHeader} alt="" className="header-logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">

                            <li className="nav-item"><a className="nav-link" href="">CHARACTERS</a></li>

                            <li className="nav-item"><a className="nav-link" href="">COMICS</a></li>

                            <li className="nav-item"><a className="nav-link" href="">MOVIES</a></li>

                            <li className="nav-item"> <a className="nav-link" href="">TV</a></li>

                            <li className="nav-item"><a className="nav-link" href="">GAMES</a></li>

                            <li className="nav-item"><a className="nav-link" href="">COLLECTIBLES</a></li>

                            <li className="nav-item"><a className="nav-link" href="">VIDEOS</a></li>

                            <li className="nav-item"><a className="nav-link" href="">FANS</a></li>

                            <li className="nav-item"><a className="nav-link" href="">NEWS</a></li>

                            <li className="nav-item"><a className="nav-link" href="">SHOP</a></li>

                        </ul>
                    </div>
                </div>
            </nav>

        </header >
    )
}
