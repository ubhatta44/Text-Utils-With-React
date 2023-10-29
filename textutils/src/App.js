import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';

function App() {
  return (
    <>
      <Navbar title = "TextUtils" mainText = "Home" aboutText = "About Us" searchText = "Search"/>
      <TextForm heading = "Enter Your Text To Analyze"/>
    </>
  );
}

export default App;
