import React, { Component } from 'react';

const bballPayload = [
    {
      name: 'Basketball Player 2',
      team: 'Team 2'
    },
    {
      name: 'Basketball Player 3',
      team: 'Team 3'
    },
    {
      name: 'Basketball Player 4',
      team: 'Team 4'
    },
    {
      name: 'Basketball Player 5',
      team: 'Team 5'
    }
  ]

  //map returns a new array
const displayBasketballPlayer = bballPayload.map((player, idx) =>{
    return (
        <div className="column" key={idx}>
        <div className="card">
            <div className="card-image">
                <figure className="image is-2by1">
                    <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{player.name}</p>
                        <p className="subtitle is-6">{player.team}</p>
                    </div>
                </div>

                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    <a>@bulmaio</a>.
                    <a href="#">#css</a>
                    <a href="#">#responsive</a>
                </div>
            </div>
        </div>
    </div>


    )
})


class Band extends Component {
    render() {
        return (
            <div>
                <nav className="navbar is-dark">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </a>
                        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="https://bulma.io/">
                                Home
                            </a>
                            <a className="navbar-item" href="https://bulma.io/" title="bandLink">
                                Band
                            </a>
                            <a className="navbar-item" href="https://bulma.io/">
                                Tour
                            </a>
                            <a className="navbar-item" href="https://bulma.io/">
                                Contact
                            </a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link" href="/documentation/overview/start/">
                                    More
                                </a>
                                <div className="navbar-dropdown is-boxed">
                                    <a className="navbar-item" href="/documentation/overview/start/">
                                        Mechandise
                                    </a>
                                    <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                                        Extras
                                    </a>
                                    <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                                        Media
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field">
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Search . . ." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <section className="hero">
                    <figure className="image">
                        <img title="frontCover" src="https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </figure>
                </section>

                <section className="section">
                    <div className="container has-text-centered">
                        <h2 className="title">The Band</h2>
                        <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        <div className="columns is-centered" style={{padding: "2rem"}}>
                        {displayBasketballPlayer}
                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-2by1">
                                            <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <p className="title is-4">John Smith</p>
                                                <p className="subtitle is-6">@johnsmith</p>
                                            </div>
                                        </div>

                                        <div className="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                            <a>@bulmaio</a>.
                                            <a href="#">#css</a>
                                            <a href="#">#responsive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-2by1">
                                            <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <p className="title is-4">John Smith</p>
                                                <p className="subtitle is-6">@johnsmith</p>
                                            </div>
                                        </div>

                                        <div className="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                            <a>@bulmaio</a>.
                                            <a href="#">#css</a>
                                            <a href="#">#responsive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-2by1">
                                            <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <p className="title is-4">John Smith</p>
                                                <p className="subtitle is-6">@johnsmith</p>
                                            </div>
                                        </div>

                                        <div className="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                            <a>@bulmaio</a>.
                                            <a href="#">#css</a>
                                            <a href="#">#responsive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section >

                <section className="section">
                    <div className="container has-text-centered">
                        <h2 className="title">Tour Dates</h2>

                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                        </div>

                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </figure>
                                    <p className="title">New York</p>
                                    <p className="subtitle">Fri 27 Nov 2016</p>
                                    <a className="button">Buy Tickets</a>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container has-text-centered">
                        <h2 className="title">Contact</h2>

                        <form>
                            <div className="field is-horizontal">
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control has-icons-left">
                                            <input className="input" type="text" placeholder="Name" title="contactNameInput"/>
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <p className="control has-icons-left has-icons-right">
                                            <input className="input" type="email" placeholder="Email" title="contactEmailInput"/>
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <textarea className="textarea" placeholder="Message us" title="contactMsgInput"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <button className="button is-primary">
                                                Send message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

                <footer className="footer">
                    <div className="container">
                        <div className="content has-text-centered">
                            <p>
                                <a href="">
                                    <i className="fab fa-facebook-square fa-2x"></i>
                                </a>
                                <a href="">
                                    <i className="fab fa-twitter-square fa-2x"></i>
                                </a>
                                <a href="">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                                <a href="">
                                    <i className="fab fa-snapchat fa-2x"></i>
                                </a>
                            </p>
                            <p>
                                <a href="https://bulma.io">
                                    <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div >
        )
    }
}

export default Band;