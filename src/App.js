import{Component} from "react";
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import EntryPage from './components/EntryPage';
import Home from "./components/Home";
import BookingPage from "./components/BookingPage";
import AppointmentViewPage from "./components/AppointmentViewPage";
import './App.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<EntryPage />} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/book" element={<BookingPage/>}/>
            <Route path="/appointment-view" element={<AppointmentViewPage />} />
        </Routes>
     </BrowserRouter>
      
    )
  }
}

export default App;
