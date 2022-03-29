import React from 'react';
import { Outlet, Link } from 'react-router-dom';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}


function Header() {
  return (
      <div class="bg-dark text-light">
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
              <div class="container-fluid">
                  <Link class="navbar-brand" to="/">Home</Link>
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <Link to="/about" class="nav-link">About</Link>
                      </li>
                      <li class="nav-item">
                          <Link to="/portfolio" class="nav-link">Portfolio</Link>
                      </li>
                      <li class="nav-item">
                          <Link to="/pokedex" class="nav-link">Pokédex</Link>
                      </li>
                  </ul>
                  <Clock/>
              </div>
          </nav>
      </div>
)
}


function Footer() {
  return (
  <footer class="footer mt-lg-2 py-3 bg-dark">
    <div class="container">
        <span class="text-muted">Creative Commons or something. +
        <a href="https://github.com/scotus-1/bingus-v2"> source</a></span>
    </div>
  </footer>
  )
}


function App() {
  return (
    <div>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
