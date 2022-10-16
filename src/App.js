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
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Checkbox, FormControlLabel, Radio, RadioGroup, Slider } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Favorite } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';



const App = () => {

  function valuetext(value) {
    return `${value}°C`;
  }

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
      <Button color='secondary' variant='contained' startIcon={<AddShoppingCartIcon />}>Shopping</Button>
      <h5>Icon btn</h5>
      <IconButton>
        <Fingerprint color='warning' />
      </IconButton>
      <IconButton>
        <CameraAltOutlinedIcon color='warning' />
      </IconButton>
      <h5>Custom btn</h5>
      <Button style={{ backgroundColor: 'aqua', color: 'black' }}>Custom</Button>
      <h5>Click event btn</h5>
      <Button variant='contained' color='success' onClick={() => { alert('Clicked!') }}>onClick</Button>
      <h5>Floating Action</h5>
      <Fab color='primary'>Text</Fab>
      <Fab color="secondary">
        <EditIcon />
      </Fab>
      <Fab color="primary">
        <AddIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon />
        Navigate
      </Fab>
      <Fab color='success'>
        <UpIcon /></Fab>
      <h5>Checkbox</h5>
      <Checkbox />
      <Checkbox checked />
      <Checkbox defaultChecked indeterminate />
      <Checkbox onChange={() => { alert('Checked') }} />
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <FormControlLabel control={<Checkbox />} label='Pakistan' />
      <FormControlLabel control={<Checkbox />} label='top' labelPlacement='top' />

      <h5>Radio btn</h5>

      {/* <Radio value='male' name='gender' label='Male'/>
      <Radio value='Female' name='gender' label='Female'/>
      <Radio value='other' name='gender' label='other'/> */}

      <RadioGroup name='gender ' row>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="others" control={<Radio />} label="Others" />
      </RadioGroup>

      <h5>Rating</h5>
      <Rating />
      <Rating defaultValue={3} />
      <Rating value={2} readOnly />
      <Rating defaultValue={3.5} precision={0.5} />

      <h5>Slider</h5>
      <Slider />
      <Slider defaultValue={5} />
      <Box height={100}>
        <Slider orientation='vertical' />
      </Box>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
        <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
      </Box>
      <h5>Switch</h5>
      <Switch />
      <Switch defaultChecked color='success' />
      <FormControlLabel control={<Switch />} label='on/off' />

      <h5>Text Field</h5>
      <br />
      <TextField label='name' />
      <TextField label='name' variant='standard' />
      <TextField label='name' variant='filled' />

      <h5>Stack</h5>

      <Stack direction='row' spacing={5}>
        <Button variant='contained' endIcon={<DeleteIcon />}>Delete</Button>
        <Button color='warning' variant='contained' endIcon={<AddIcon />}>Add</Button>
        <Button color='secondary' variant='contained' startIcon={<AddShoppingCartIcon />}>Shopping</Button>
      </Stack>

      <h5>Width Sizing , style Props use in box</h5>
      <Box width={1 / 4} bgcolor='aqua'>1/4</Box>
      <Box width={1} bgcolor='yellow'>1</Box>
      <h5>height Size and width</h5>
      <Box height='100px' bgcolor='grey' width='300px' ></Box>
      <h5>Text Align and border</h5>
      <Stack spacing={3}>
        <Box border={1} textAlign='center'>Center</Box>
        <Box borderBottom={1} textAlign='left'>left</Box>
        <Box textAlign='right'>Right</Box>
      </Stack>
      <h5>Avatar</h5>
      <Stack direction='row'>
        <Avatar src='https://media.istockphoto.com/photos/ace-of-diamonds-isolated-on-a-gray-background-gamble-playing-cards-picture-id1386641462?b=1&k=20&m=1386641462&s=170667a&w=0&h=P-gieqwI3PoM-lXaEDTMESS1g9koI_bZpjEyUGly_pw='></Avatar>
        <Avatar src='https://media.istockphoto.com/photos/3d-cute-tiger-avatar-picture-id1415913421?b=1&k=20&m=1415913421&s=170667a&w=0&h=o2KOh3kxFVdIuHVT8IqlpLnX64agd4nBIyzis9XlKqs='></Avatar>
        <Avatar>
          <DeleteIcon/>
        </Avatar>
      </Stack>
    </>
  )

}
export default App;