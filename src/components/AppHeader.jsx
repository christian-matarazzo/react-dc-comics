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

            <img src="/img/dc-logo.png" alt="" className="header-logo" />

            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
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
                            </li>
                            <li class="nav-item dropdown">
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}
