import React, { Component } from 'react';
import './Absurd';

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
      <div key={idx}>
        <h1>Name {player.name}</h1>
        <p>Team {player.team}</p>
      </div>


    )
})

class Absurd extends Component {
    render() {
        return (
            <div>
                {/* <!-- NavBar va a todo lo ancho --> */}
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                        </a>
                    </div>

                    <div class="navbar-menu">

                        <div class="navbar-end">
                            <a class="navbar-item">
                                WHY?
                            </a>

                            <a class="navbar-item" title="buyIcon">
                                BUY
                            </a>

                            <a class="navbar-item" title="illustrationLink">
                                ILLUSTRATION SERIES
                            </a>

                            <a class="navbar-item" title="exclusiveLink">
                                EXCLUSIVE ILLUSTRATIONS
                            </a>

                        </div>
                    </div>
                </nav>

                {/* <!-- Hero del producto --> */}
                <section id="colored-dna-back" class="hero is-white is-fullheight">
                    <div class="hero-body">
                        <div class="container">
                            <div class="columns  is-vcentered reverse-columns">
                                <div class="column
          is-10-mobile 
          is-10-tablet 
          is-5-desktop 
          is-5-widescreen 
          is-5-fullhd " data-aos="fade-down">
                                    <h1 class="title titled is-1 mb-6">
                                    {displayBasketballPlayer}
                                    </h1>
                                    <div class="buttons">
                                        <button class="button is-yellow" title="techTeamLink">Esablished technical teams</button>
                                        <button class="button" title="lessTechTeamLink">Less-technical teams</button>
                                    </div>
                                </div>
                                <div data-aos="fade-right" class="column
          is-10-mobile 
          is-10-tablet 
          is-4-desktop 
          is-7-widescreen 
          is-4-fullhd is-offset-1-fullhd">
                                    <figure class="image is-square">
                                        <img src="../images/people-solving-a-puzzle.png" title="mainPhoto"/>
                                    </figure>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section class="hero is-white is-fullheight">
                    <div class="hero-body">
                        <div class="container">
                            <div class="columns  is-vcentered">
                                <div data-aos="fade-left" class="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-4-desktop is-offset-1-desktop
          is-4-widescreen is-offset-1-widescreen
          is-4-fullhd is-offset-1-fullhd">
                                    <figure class="image is-square">
                                        <img src="../images/undraw_Camera_re_cnp4.svg"/>
                                    </figure>
                                </div>
                                <div data-aos="fade-down" class="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-5-desktop is-offset-1-desktop
          is-5-widescreen is-offset-1-widescreen
          is-5-fullhd is-offset-1-fullhd">
                                    <h1 class="titled title is-1 mb-6">
                                        absurd illustrations that make sense
                                    </h1>
                                    <h2 class="subtitled subtitle">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cupiditate dolorum vitae dolores
                                        nesciunt totam magni quas.
                                    </h2>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section class="hero is-white is-fullheight">
                    <div class="hero-body">
                        <div class="container">
                            <div class="columns  is-vcentered reverse-columns">
                                <div data-aos="fade-right" class="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-5-desktop is-offset-1-desktop
          is-5-widescreen is-offset-1-widescreen
          is-5-fullhd is-offset-1-fullhd">
                                    <h1 class="title titled is-1 mb-6" title="absurdTitle">
                                        absurd illustrations that make sense
                                    </h1>
                                    <h2 class="subtitle subtitled" title="absurdText">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cupiditate dolorum vitae dolores
                                        nesciunt totam magni quas.
                                    </h2>
                                </div>
                                <div data-aos="fade-down" class="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-4-desktop is-offset-1-desktop
          is-4-widescreen is-offset-1-widescreen
          is-4-fullhd is-offset-1-fullhd" data-aos="fade-up">
                                    <figure class="image is-square">
                                        <img src="../images/undraw_Camera_re_cnp4.svg"/>
                                    </figure>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section class="hero is-medium has-text-centered">
                    <div class="hero-body">
                        <div class="container">
                            <div class="columns is-centered">
                                <div data-aos="zoom-in-up" class="column is-8">
                                    <h1 class="title titled is-1 mb-6" title="footerTitle">
                                        Primary bold title <span id="typewriter"></span>
                                    </h1>
                                    <h2 class="subtitle subtitled" title="footTitleText">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cupiditate dolorum vitae dolores
                                        nesciunt totam magni quas.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    </h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Absurd;