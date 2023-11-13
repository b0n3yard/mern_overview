import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/esm/Container'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import axios from'axios'


export default function Header({user, setuser}){
    const navigate = useNavigate()
    const logout = async (e) =>{
        e.preventDefault()
        await axios.get('/auth/logout')
        setuser(null)
        navigate('/')

    }


    return(
        <Navbar expand='lg' className='bg-body-tetriary'>
            <Container>
                <Navbar.Brand as={Link} to='/'>Auth app</Navbar.Brand>
                <Navbar.Toggle aria-controls=' basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ms-auto">
                        {user ? (
                            <>
                            <p>hi, {user.username}</p>
                            <NavLink to="/logout" onClick={logout}>logout</NavLink>
                            </>  
                            ):(
                                <>
                                <NavLink to="/register">register</NavLink>
                                <span>or</span>
                                <NavLink to="/login">login</NavLink>

                                </>
                            )}

                    </Nav>

                </Navbar.Collapse>

                
            </Container>

        </Navbar> 
    )

}