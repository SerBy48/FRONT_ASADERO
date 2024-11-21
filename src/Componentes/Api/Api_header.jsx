
import Logo from "/src/Img/Logo.png";
import "/src/css/Api_header.css";
import * as FaIcons from'react-icons/fa'

export default function Api_Header({obtenerSearch}){
  return (
    <div className="header">
      <div className="div_header">
        <div className="div_logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="div_search">
          <div>
            <FaIcons.FaSearch />
          </div>
          <input type="search" onChange={(e)=> obtenerSearch(e.target.value)} />
        </div>
      </div>
    </div>
  )
}