import { useEffect, useState } from 'react';
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";
import { useContext } from 'react';
import { SidebarContext } from '../../context/sidebarContext';
import somaiya from '../../assets/images/somaiya.jpg'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(null);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {

    if(isSidebarOpen){
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);
  const handleClick=(id)=>{
    setActiveLinkIdx(id)
  }

  return (
    <div className={ `sidebar ${sidebarClass}` }>
      <div className="user-info">
          <div className="info-img img-fit-cover">
              <img src={somaiya} alt="profile image" />
          </div>
          <span className="info-name">SomaiyaSync</span>
      </div>

      <nav className="navigation">
          <ul className="nav-list">
            {
              navigationLinks.map((navigationLink) => (
                <li  onClick={() => handleClick(navigationLink.id)}  className="nav-item" key = { navigationLink.id }>
                 <Link  state={{
                  topName:"home",
                  userName:"Contest"


                 }} to ={`/${navigationLink.title}`} className={ `nav-link ${ navigationLink.id === activeLinkIdx ? 'active' : null }` }>
                      <img src={ navigationLink.image } className="nav-link-icon" alt = { navigationLink.title } />
                      <span className="nav-link-text">{ navigationLink.title }</span>
                  </Link> 
                </li>
              ))
            }
          </ul>
      </nav>
    </div>
  )
}

export default Sidebar
