// import logo from './logo.svg';
import './App.css';
import './index.css'
//simple change url
// import { Link, Route, Routes } from "react-router-dom";
// import About from "./About";
// import Home from "./home";
// import Contact from "./Contact";
// function App() {
//   return (
//   <>
//    <h1>hello router</h1>
//   <Routes>
//     <Route exact path="/" element={<Home/>}/>
//     <Route  path="/contact" element={<Contact/>}/>
//     <Route  path="/about" element={<About/>}/>
// </Routes>
//    </>
//   );
// }
// export default App;


//simple change url and component rendering using Link 
// import { Link, Route, Routes } from "react-router-dom";

// import Home from "./home";
// import Contact from "./Contact";
// import About from "./About";
// function App() {
//   return (
//     <>
//       <h1>hello router</h1>
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </>
//   );
// }
// export default App;

//active class ,change link color , navlink , remove exact , error page
// import { Route, Routes } from "react-router-dom";

// import Home from "./home";
// import Contact from "./Contact";
// import About from "./About";
// // import Error from './Error';
// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         {/* <Route path='*' element={<Error/>}/> */}
//       </Routes>
//     </>
//   );
// }
// export default App;

//go to back
// import { Route, Routes } from "react-router-dom";

// import Home from "./home";
// import Contact from "./Contact";
// import About from "./About";
// import Error from './Error';
// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path='*' element={<Error/>}/>
//       </Routes>
//     </>
//   );
// }
// export default App;

//nested route: isme hum '/' wala humara parent hota hy or waha se self closing tag hata kr hum nechy tag close krty hain


//Material-ui-V5-practice



import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
const App = () => {
  return (
    <>
      <h5>Text btn</h5>
      <Button color='secondary'>Click here : </Button>
      <Button color='success' href='https://google.com'>Google</Button>
      <h5>Contained btn</h5>
      <Button variant='contained' color='primary' href='https://facebook.com'>facebook</Button>
      <Button variant='contained' color='secondary' href='https://www.fiverr.com/'>Fiver</Button>
      <h5>Outlined btn</h5>
      <Button color='warning' variant='outlined' href='https://www.fiverr.com/' >Fiver</Button>
      <h5>Disabled btn</h5>
      <Button variant='contained' disabled>Disabled</Button>
      <h5>btn with icon</h5>
      <Button variant='contained' endIcon={<DeleteIcon />}>Delete</Button>
      <Button color='warning' variant='contained' endIcon={<AddIcon />}>Add</Button>
      <h5>Icon btn</h5>
      <IconButton>
        <Fingerprint color='warning' />
      </IconButton>
      <h5>Custom btn</h5>
      <Button style={{backgroundColor : 'aqua' , color: 'black'}}>Custom</Button>
      <h5>Click event btn</h5>
      <Button variant='contained' color='success' onClick={()=>{alert('Clicked!')}}>onClick</Button>
    </>
  )

}
export default App;