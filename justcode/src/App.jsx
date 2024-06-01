import './App.css';
import "./components/Header"
import Header from './components/Header';
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Slider';
import DataBase from './api/DataBase';
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App bg-body-tertiary">
            <Header/>
            <Slider/>
            <DataBase/>
            {/*<Comments*/}
            {/*  commentsUrl="http://localhost:3004/comments"*/}
            {/*  currentUserId="1"*/}
            {/*/>*/}
            <Footer/>
        </div>
    );
}

export default App;
