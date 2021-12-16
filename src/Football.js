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

class Football extends Component{
    render(){
        return (
            <div>
                <h1>Football</h1>
                <div>
                    <h1>{footballPlayer.name}</h1>
                    <p>{footballPlayer.team}</p>
                </div>

                {displayFootballPlayer}
            </div>
        )
    }
}

export default Football;
