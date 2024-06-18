import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NavBar = ({query,handleSubmit,setQuery}) => {
  return (
    <div>
          <nav className="navbar">
            <div className="nabbar_logo">
              Fotoflix
            </div>
            <div className="search">
              <form action='' className='navebar_search-form' onSubmit={(e)=>{handleSubmit(e)}}>
              <input type="text" name="search" id="myInput" placeholder="Search.." value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
              <button type="submit" className="submit-btn">
              <FaSearch />
            </button>
           </form>
            </div>
            <div className="nabbar_links">
              <Link to="/"  > Home </Link>
              <Link to="/favorites">Favorites</Link>
            </div>
          </nav>
        </div>
  )
}

export default NavBar