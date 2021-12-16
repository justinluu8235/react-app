import React, {Component} from 'react'

const soccerPlayer = {
    name: 'Some Soccer Player',
    team: "Some Soccer Team"
}

const soccerPayLoad = [
    {
        name: 'Soccer Player 2',
        team: 'Team 2'
      },
      {
        name: 'Soccer Player 3',
        team: 'Team 3'
      },
      {
        name: 'Soccer Player 4',
        team: 'Team 4'
      },
      {
        name: 'Soccer Player 5',
        team: 'Team 5'
      }
]

const displaySoccerPlayer = soccerPayLoad.map((player, idx) => {
    return(
        <div key={idx}>
        <h1>Name {player.name}</h1>
        <p>Team {player.team}</p>
         </div>
    )
})

class Soccer extends Component{
    render(){
        return (
            <div>
                <h1>Soccer</h1>
                <div>
                    <h1>{soccerPlayer.name}</h1>
                    <p>{soccerPlayer.team}</p>
                </div>

                {displaySoccerPlayer}
            </div>
        )
    }
}

export default Soccer;