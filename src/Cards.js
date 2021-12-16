import './Cards.css';
import React, {Component} from 'react'



const footballPlayer = {
    name: 'Some Football Player',
    team: "Some Football Team"
}

const badmintonPayLoad = [
    {
        name: 'Football Player 2',
        team: 'Team 2'
      },
      {
        name: 'Football Player 3',
        team: 'Team 3'
      },
      {
        name: 'Football Player 4',
        team: 'Team 4'
      },
      {
        name: 'Football Player 5',
        team: 'Team 5'
      }
]

const displayFootballPlayer = badmintonPayLoad.map((player, idx) => {
    return(
        <div key={idx}>
        <h1>Name {player.name}</h1>
        <p>Team {player.team}</p>
         </div>
    )
})

class Cards extends Component{
    render(){
        return(
            <div>
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item" href="#">
                    <img src="https://cdn.emk.dev/templates/bulma-logo-light.png" alt="Logo"/>
                  </a>
                  <span className="navbar-burger burger" data-target="navbarMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenu" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">
                      Home
                    </a>
                    <a className="navbar-item">
                      Examples
                    </a>
                    <a className="navbar-item">
                      Features
                    </a>
                    <a className="navbar-item">
                      Team
                    </a>
                    <a className="navbar-item">
                      Archives
                    </a>
                    <a className="navbar-item">
                      Help
                    </a>
                  </div>
                </div>
              </div>
            </nav>

        
            <div className="container">
              <div className="section">
                <div className="columns">
                  <div className="column has-text-centered">
                    <h1 className="title" >Bulma Card Layout Template</h1><br/>
                  </div>
                </div>
                <div id="app" className="row columns is-multiline">
                <div v-for="card in cardData" key="card.id" class="column is-4">
            <div class="card large">
              
             
   
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 no-padding"></p>
                    <br/>
                    <p>
                      <span class="title is-6">
                      {displayFootballPlayer}</span> </p>
                     
                    
                  </div>
                </div>
                <div class="content">
                </div>
              </div>
            </div>
          </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="container">
                <div className="content has-text-centered">
                  <div className="soc">
                    <a href="#"><i className="fa fa-github-alt fa-lg" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-youtube fa-lg" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
                  </div>
                  <p>
                    <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>.
                    The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. <br/>
                  </p>
                </div>
              </div>
            </footer>
        
            <script src="../js/cardsData.js"></script>
            </div>
        )
    }
}


export default Cards;
