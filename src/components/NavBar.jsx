import React,{useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavBar = ({query,handleSubmit,setQuery}) => {
    const [active, setActive] = useState(null);
    const [dataTabs, setDataTabs] = useState([
        {
          id: 1,
          tabTitle: "Home",
          tabClass: "myCustomClass",
          tabClicked: false,
          navigateTo:"/"
        },
        {
          id: 2,
          tabTitle: "Favorites",
          tabClass: "myCustomClass",
          tabClicked: false,
          navigateTo:"/favorites"
        }
      ]);
      const navigate = (id) => {
        
        setActive(id);
      };
  
  const NavLink = ({ item, isActive, onClick }) => {
    return (
        <Link to={item.navigateTo} className={isActive ? 'active': ''}  onClick={()=>{onClick(item.id)}}> {item.tabTitle } </Link>
    );
  };
  return (
    <div className='topnav'>
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
            {dataTabs.map((item) => (
        <div key={item.id} >
          <NavLink item={item} isActive={active === item.id} onClick={navigate} />
        </div>
      ))}
              {/* <Link to="/" className={isActive ? 'active': ''}  onClick={toggleClass}> Home </Link>
              <Link to="/favorites" className={isActive ? 'active': ''}  onClick={toggleClass}>Favorites</Link> */}
            </div>
          </nav>
        </div>
  )
}

export default NavBar