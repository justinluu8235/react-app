import React, {Component} from "react";
import './Landing.css'

class Landing extends Component{
    render(){
        return(
            <section className="hero is-info is-fullheight">
                  <link rel="shortcut icon" href="../images/fav_icon.png" type="image/x-icon"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet"></link>
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="../">
                                <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo"/>
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <span className="navbar-item">
                                    <a className="button is-white is-outlined" href="#">
                                        <span className="icon">
                                            <i className="fa fa-home"></i>
                                        </span>
                                        <span>Home</span>
                                    </a>
                                </span>
                                <span className="navbar-item">
                                    <a className="button is-white is-outlined" href="#">
                                        <span className="icon">
                                            <i className="fa fa-superpowers"></i>
                                        </span>
                                        <span>Examples</span>
                                    </a>
                                </span>
                                <span className="navbar-item">
                                    <a className="button is-white is-outlined" href="#">
                                        <span className="icon">
                                            <i className="fa fa-book"></i>
                                        </span>
                                        <span>Documentation</span>
                                    </a>
                                </span>
                                <span className="navbar-item">
                                    <a className="button is-white is-outlined" href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/landing.html">
                                        <span className="icon">
                                            <i className="fa fa-github"></i>
                                        </span>
                                        <span>View Source</span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
                </div>
    
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-6 is-offset-3">
                            <h1 className="title">
                                Coming Soon
                            </h1>
                            <h2 className="subtitle">
                                $this is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
                            </h2>
                            <div className="box">
                                <div className="field is-grouped">
                                    <p className="control is-expanded">
                                        <input className="input" type="text" placeholder="Enter your email"/>
                                    </p>
                                    <p className="control">
                                        <a className="button is-info">
                                            Notify Me
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script async type="text/javascript" src="../js/bulma.js"></script>
        </section>
        )
    }
}

export default Landing;
