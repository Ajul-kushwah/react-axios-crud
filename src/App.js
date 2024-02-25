import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LoginStylish from './components/LoginStylish';
import CreateStylish from './components/CreateStylish';
import ReadStylish from './components/ReadStylish';
import EditStylish from './components/EditStylish';
import LogoutStylish from './components/LogoutStylish';
import ProfileStylish from './components/ProfileStylish';
import SettingStylish from './components/SettingStylish';
import ActivityStylish from './components/ActivityStylish';
import PageNotFound from './components/404Error';
//import Create from './components/Create';
//import Read from './components/Read';
//import Edit from './components/Edit';

function App() {
  return (
    <div className="container">
      <Routes>
        
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/read' element={<ReadStylish/>}></Route>
        <Route exact path='/login' element={<LoginStylish/>}></Route> 
        <Route exact path='/create' element={<CreateStylish/>}></Route>
        <Route exact path='/edit' element={<EditStylish/>}></Route>
        <Route exact path='/profile' element={<ProfileStylish/>}></Route>
        <Route exact path='/activity' element={<ActivityStylish/>}></Route>
        <Route exact path='/setting' element={<SettingStylish/>}></Route>
        <Route exact path='/logoutWindow' element={<LogoutStylish/>}></Route>

        <Route exact path='*' element={<PageNotFound/>}></Route>

        {/* <Route exact path='/home' element={<Home/>}></Route> */}
        {/* <Route exact path='/' element={<Read/>}></Route> */}
        {/* <Route exact path='/edit' element={<Edit/>}></Route> */}
        {/* <Route exact path='/create' element={<Create/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
