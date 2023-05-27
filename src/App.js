import './App.css';
import Header from './components/header';
import UserCard from './components/userCard';
import users from './data/users.json';
import Button from '@mui/material/Button';
function userCards () {
  
  // for each user in users, create a UserCard component
  // and pass in the user's data as props
  return users.map(user => {
    return (
      <UserCard
        name={user.firstName + " " + user.lastName}
        role={user.role}
        email={user.email}
        address={user.street + ", " + user.city + ", " + user.state + " " + user.zip}
        phone={user.phone}
        createdAt={user.createdAt}
        lastLoggedIn={user.lastLoggedIn}
      />
    );
  });
}

// function moreInfo() {
  
// }

function App() {
  return (
    <div className="App" style={{backgroundColor: '#f1f5f6'}}>
      <Header />
      {userCards()}
    </div>
  );
}

export default App;
