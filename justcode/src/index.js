import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import 'bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './pages/About';
import Contacts from './pages/Contacts';
import {Provider} from 'react-redux'
import store from './redux/store';
import Detail from "./pages/detail";
import GuidesData from './api/GuidesData';
import GuidesDetails from './pages/GuidesDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path='/' element={<App/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/detail/:id' element={<Detail/>}/>
                    <Route path='/guides' element={<GuidesData/>}/>
                    <Route path='/guide/:id' element={<GuidesDetails/>}/>
                    
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>
);

