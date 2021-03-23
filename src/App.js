import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {BrowserRouter,Switch,Route, Redirect} from "react-router-dom"
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
function App() {
  return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path='/' render={()=> <Redirect to='/home'/>} />
                    <Route exact path='/home' render={()=> <Home/>} />
                    <Route exact path='/about' render={()=> <About/>} />
                    <Route exact path='/portfolio' render={()=> <Portfolio/>} />
                    <Route exact path='/team' render={()=> <Team/>} />
                    <Route exact path='/blog' render={()=> <Blog/>} />
                    <Route exact path='/contact' render={()=> <Contact/>} />
                </Switch>
            </BrowserRouter>
        </div>
  );
}

export default App;
