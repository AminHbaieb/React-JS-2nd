import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        STUDING
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    Home <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    href="https://gomycode.com/GL-EN/home"
                                >
                                    GoMyCode School to learn Raect JS
                                </a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input
                                class="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            ></input>
                            <button
                                class="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </nav>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">
                        Select your age:
                    </label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                        <option>32</option>
                        <option>33</option>
                        <option>34</option>
                        <option>35</option>
                        <option>36</option>
                        <option>37</option>
                        <option>38</option>
                        <option>39</option>
                        <option>40</option>
                    </select>
                </div>
                <button type="button" class="btn btn-primary">
                    Pass the IQ Test
                </button>

                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    React.js is JavaScript library for building user
                    interfaces..
                </p>

                <a
                    className="App-link"
                    href="https://learn.gomycode.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <h2>Welcome to GoMyCode</h2>
                <form>
                    <label>* Username: </label>
                    <input
                        class="email"
                        type="UserName"
                        placeholder="UserName"
                    />
                    <label>* Email: </label>
                    <input class="email" type="email" placeholder="Email" />
                    <label>* Password: </label>
                    <input
                        class="email"
                        type="UserName"
                        placeholder="ex: TpFr5718"
                    />
                    <br></br>
                    <button type="button" class="btn btn-primary btn-lg">
                        Sign up
                    </button>
                    <div className="text-center">
                        <a href="/Log in">Log in</a>
                        <span className="span">|</span>
                        <a href="forget-password">Forget Password</a>
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;
