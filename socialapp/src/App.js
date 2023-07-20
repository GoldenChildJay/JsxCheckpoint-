
import './App.css';
import Fullname from './Components/FullName';
import Address from './Components/Profile/Address';
import ProfilePhoto from './Components/Profile/ProfilePhoto';


function App() {
  return (
    <div className="App">
      <ProfilePhoto></ProfilePhoto>
      <Fullname></Fullname>
      <Address></Address>
    </div>
  );
}

export default App;