import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import SIgnin from './Pages/SIgnin';
import SignOut from './Pages/SignUp';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './Pages/CreateListing';
import UpdateListing from './Pages/UpdateListing';
import Listing from './Pages/Listing';
import Search from './Pages/Search';
export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Sign-in' element={<SIgnin/>}/>
    <Route path='/Sign-up' element={<SignOut/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='Listing/:listingId' element={<Listing/>}/>
    
    <Route element={<PrivateRoute />}>
    <Route path='/Profile' element={<Profile/>}/>
    <Route path='/create-listing' element={<CreateListing/>}/>
    <Route path='/update-listing/:listingId' element={<UpdateListing/>}/>
    </Route>
  </Routes>
</BrowserRouter>
}
