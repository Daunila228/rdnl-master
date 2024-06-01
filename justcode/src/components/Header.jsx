import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap'
import '../index.css'
import {useSelector} from 'react-redux';


function Header() {
    const cartItems = useSelector(state => state.cart.cart)
    return (
        <div className="_container">
            <Navbar expand="lg" className="bg-body-tertiary navbar" style={{borderBottom: '1px solid black'}}>
                <Container>
                    <Navbar.Brand href="/"><h1>AirDNL</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft: 800}}>
                        <Nav style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                            <Nav.Link style={{whiteSpace: 'nowrap'}} href={'/'}>Главная</Nav.Link>
                            <Nav.Link style={{whiteSpace: 'nowrap'}} href={'/about'}>О нас</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
