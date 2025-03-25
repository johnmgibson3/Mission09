
import './App.css'
import teamsData from './CollegeBasketballTeams.json'



type Team = {
  school: string;
  name: string;
  city: string;
  state: string;
};

const filteredTeams: Team[] = teamsData.teams.map((team: any) => ({
  school: team.school,
  name: team.name,
  city: team.city,
  state: team.state
}));

function Welcome()
{
  return( <h1>This Site Contains Info About the March Madness Teams!</h1>
    
  )
  ;
}


function TeamCard({ school, name, city, state }: Team) {
  return (
    <div className="card">
      <h2>{school}</h2>
      <p>Mascot: {name}</p>
      <p>Location: {city}, {state}</p>
    </div>
  );
}


function TeamList() {
  return (
    <>
      {filteredTeams.map((team, index) => (
        <TeamCard key={index} {...team} />
      ))}
    </>
  );
}

function App() {




  return (
    <>
    {/* Curly braces let you pass info into  */}
      
      <Welcome/>
      <TeamList/>


    </>
  )
}

export default App
