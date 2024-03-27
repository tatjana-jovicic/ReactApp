import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <nav className='navCSS'>
            <Link to={{ pathname: '/' }}>Home</Link>
            <Link to={{ pathname: '/about' }}>About</Link>
            <Link to={{ pathname: '/work' }}>Work</Link>
            <Link to={{ pathname: '/posts' }}>Posts</Link>
            <Link to={{ pathname: '/users' }}>Users</Link>
        </nav>
    )
}

export default Navigation