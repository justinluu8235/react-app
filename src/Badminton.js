import React, {Component} from 'react'


const badmintonPlayer = {
    name: 'Some Badminton Player',
    team: "Some Badminton Team"
}

const badmintonPayLoad = [
    {
        name: 'Badminton Player 2',
        team: 'Team 2'
      },
      {
        name: 'Badminton Player 3',
        team: 'Team 3'
      },
      {
        name: 'Badminton Player 4',
        team: 'Team 4'
      },
      {
        name: 'Badminton Player 5',
        team: 'Team 5'
      }
]

const displayBadmintonPlayer = badmintonPayLoad.map((player, idx) => {
    return(
        <div key={idx}>
        <h1>Name {player.name}</h1>
        <p>Team {player.team}</p>
         </div>
    )
})

class Badminton extends Component{
    render(){
        return (
            <div>
                <h1>Badminton</h1>
                <div>
                    <h1>{badmintonPlayer.name}</h1>
                    <p>{badmintonPlayer.team}</p>
                </div>

                {displayBadmintonPlayer}
            </div>
        )
    }
}

export default Badminton;