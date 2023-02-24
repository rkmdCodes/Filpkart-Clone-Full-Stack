import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/Home/Home.jsx';
import {Box} from '@mui/material';
import NavBar from './components/Home/NavBar';


function App() {
  return (
    <div>
       <Header/>
        <Box style={{marginTop:54}}>
            <Home/>
        </Box>
    </div>
  );
}

export default App;
