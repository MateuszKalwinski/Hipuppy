<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Portfolio with bootstrap">
    <meta name="author" content="Mateusz Kałwiński">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{env('APP_NAME')}}</title>


    <link rel="icon" href="{{asset('images/logo.png')}} ">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="{{asset('components/material/css/bootstrap.min.css')}}">
    <!-- Material Design Bootstrap -->
    <link rel="stylesheet" href="{{asset('components/material/css/mdb.min.css')}}">
    <!-- Your custom styles (optional) -->
    <link rel="stylesheet" href="{{asset('components/material/css/style.css')}}">
    <!-- SLICK (optional) -->
    <link rel="stylesheet" type="text/css" href="{{asset('components/slick-1.8.1/slick/slick.css')}}"/>
    <link rel="stylesheet" type="text/css" href="{{asset('components/slick-1.8.1/slick/slick-theme.css')}}"/>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <script>
        var base_url = '{{ url('/') }}';
    </script>

</head>
<body>
<header class="position-relative bg-mask ">
    <div class="overflow-hidden video-overview position-absolute w-100 h-100" style="bottom: 0; z-index: -1;">
        <video muted="muted" src="{{asset('images/footage/mainfootage.mp4')}}" autoplay="autoplay" loop="loop"
               playsinline="" class="w-100 video-position">
            <div class="w-100 h-100"></div>
        </video>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar shadow-none">
        <div class="container smooth-scroll">
            <a class="navbar-brand" href="{{route('home')}}"><strong>Idogo</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-5"
                    aria-controls="navbarSupportedContent-5" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent-5">
                <ul class="navbar-nav w-100 position-relative justify-content-around nav-btn-search">
                    <li class="nav-item">
                        <a class="nav-link" href="{{route('animals')}}">Zwierzęta</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{route('shelters')}}">Schroniska</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Adopcja</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Artukuły</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{route('breeds')}}">Rasy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{route('joinShelter')}}">Dodaj schronisko</a>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    @guest()
                        <i class="far fa-2x fa-user-circle text-muted my-auto"></i>
                        <li class="nav-item"><a class="nav-link" href="{{ route('login') }}">Zaloguj</a></li>
                        <span class="text-white my-auto">/</span>
                        <li class="nav-item"><a class="nav-link" href="{{ route('register') }}">Zarejestruj</a></li>
                    @endguest

                    @auth()
                        <li class="nav-item avatar dropdown">
                            <a class="nav-link dropdown-toggle d-flex align-items-center" id="navbarDropdownMenuLink-5" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">
                                <div>
                                    <img class="rounded-circle menu-profile-image profile-image-size" src="{{Auth::user()->photos[0]['path'] ?? $placeholderUser}}">

                                    {{--                                        <img class="rounded-circle menu-profile-image" src="{{Auth::user()->photos[0]['path'] ?? $placeholderUser}}">--}}
                                </div>
                                <div class="ml-2 mr-2">
                                    <p class="nav-item mb-0">{{ Auth::user()->FullName }}</p>
                                    <small class="nav-item">{{ Auth::user()->email }}</small>
                                </div>
                                <i class="fas fa-angle-down"></i>
                            </a>


                            <div class="dropdown-menu dropdown-dark mt-1 border-none z-depth-1"
                                 aria-labelledby="navbarDropdownMenuLink-55">
                                <a class="dropdown-item" href="{{ route('profile') }}">Mój profil</a>
                                <a class="dropdown-item" href="{{ route('adminHome') }}">Dodaj zwierzaka</a>
                                <a class="dropdown-item" href="{{ route('adminHome') }}">Ustawienia</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                               document.getElementById('logout-form').submit();">
                                    Wyloguj
                                </a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    {{ csrf_field() }}
                                </form>
                            </div>
                        </li>

                    @endauth
                </ul>


            </div>
        </div>
    </nav>

    <!-- Intro Section -->
    <div id="home" class="view jarallax position-relative" data-jarallax='{"speed": 0.2}'>


        <div class="mask rgba-stylish-light">
            <div class="container h-100 d-flex justify-content-center align-items-center">
                <div class="row pt-5 w-100">
                    <div class="col-md-12 mb-3 w-100">
                        <div class="intro-info-content text-center">
                            <h1 class="display-4 white-text mb-4 quotes font-weight-light">Adoptuj pupila</h1>
                            <h1 class="display-4 white-text mb-4 quotes font-weight-light">Wspomóż schroniska</h1>
                            <h1 class="display-4 white-text mb-4 quotes font-weight-light">Znajdź najlepszych
                                weterynarzy</h1>
                            <h5 class="white-text mb-4 mt-1">Idogo. Z myślą o naszych podopiecznych </h5>
                            <div class="d-flex justify-content-center pl-5 pr-5">
                                <div class="rgba-white-strong pl-3 pr-3 pt-3 rounded">
                                    <form id="searchAnimalsFrom" class="" style="color: #757575;"
                                          action="{{ route('searchAnimals') }}" method="get">
                                        <select id="animalSpecies" name="animalSpecies" class="mdb-select md-form m-0"
                                                searchable="Szukaj zwierzaka">
                                            <option value="" disabled selected>Znajdź...</option>

                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-dark shadow-none position-absolute w-100" style="bottom: 0;">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
                    <ul class="navbar-nav w-100 justify-content-around">
                        <li class="nav-item">
                            <a class="nav-link" href="{{route('animals')}}">Zwierzęta</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{route('shelters')}}">Schroniska</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Adopcja</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Artukuły</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{route('breeds')}}">Rasy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{route('joinShelter')}}">Dodaj schronisko</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>


</header>

@yield('content')


<!-- Footer -->
<footer class="page-footer font-small elegant-color-dark pt-4">

    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">

        <!-- Grid row -->
        <div class="row">

            <!-- Grid column -->
            <div class="col-md-6 mt-md-0 mt-3">

                <!-- Content -->
                <h5 class="text-uppercase">Znajdź nas na: </h5>
                <div class="d-flex flex-row">
                    <button
                        class="btn indigo lighten-1 btn-rounded text-white pl-4 pr-4 waves-effect waves-light text-transform-none">
                        <i class="fab fa-lg fa-facebook-square mr-3"></i> Facebook
                    </button>
                    <button
                        class="btn indigo lighten-1 btn-rounded text-white pl-4 pr-4 waves-effect waves-light text-transform-none">
                        <i class="fab fa-lg fa-instagram mr-3"></i> Instagram
                    </button>
                    <button
                        class="btn indigo lighten-1 btn-rounded text-white pl-4 pr-4 waves-effect waves-light text-transform-none">
                        <i class="fab fa-lg fa-twitter-square mr-3"></i> Twitter
                    </button>
                </div>

            </div>
            <!-- Grid column -->

            <hr class="clearfix w-100 d-md-none pb-3">

            <!-- Grid column -->
            <div class="col-md-3 mb-md-0 mb-3">

                <!-- Links -->
                <h5 class="text-uppercase">Idogo</h5>

                <ul class="list-unstyled">
                    <li>
                        <a href="#!">Pomoc</a>
                    </li>
                    <li>
                        <a href="#!">Kontakt</a>
                    </li>
                    <li>
                        <a href="#!">Polityka prywatności</a>
                    </li>
                    <li>
                        <a href="#!">Polityka plików "cookies"</a>
                    </li>
                    <li>
                        <a href="#!">Regulamin Idogo</a>
                    </li>
                </ul>

            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 mb-md-0 mb-3">

                <!-- Links -->
                <h5 class="text-uppercase">O nas</h5>

                <ul class="list-unstyled">
                    <li>
                        <a href="#!">Dodatkowe informacje</a>
                    </li>
                    <li>
                        <a href="#!">Blog</a>
                    </li>
                    <li>
                        <a href="#!">Mapa kategori</a>
                    </li>
                    <li>
                        <a href="#!">Mapa miejscowości</a>
                    </li>
                    <li>
                        <a href="#!">Usługi</a>
                    </li>
                </ul>

            </div>
            <!-- Grid column -->

        </div>
        <!-- Grid row -->

    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2019 Wszystkie prawa zastrzeżone
        <a href="https://mdbootstrap.com/education/bootstrap/"> Idogo.pl</a>
    </div>
    <!-- Copyright -->

</footer>
<!-- Footer -->

<script type="text/javascript" src="{{asset('components/material/js/jquery.min.js')}}"></script>
<!-- Bootstrap tooltips -->
<script type="text/javascript" src="{{asset('components/material/js/popper.min.js')}}"></script>
<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="{{asset('components/material/js/bootstrap.min.js')}}"></script>
<!-- MDB core JavaScript -->
<script type="text/javascript" src="{{asset('components/material/js/mdb.min.js')}}"></script>
<!-- SLICK -->
<script type="text/javascript" src="{{asset('components/slick-1.8.1/slick/slick.min.js')}}"></script>

<script src="{{ asset('js/main.js') }}"></script>
<script src="{{ asset('js/app.js') }}"></script>
<script src="{{ asset('js/menu.js') }}"></script>


@stack('scripts')
</body>
</html>



