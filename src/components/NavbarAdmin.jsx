import "../sass/components/navbaradmin.scss"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import UserImg from "../images/vot.png"

const NavbarAdmin = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
              <input type="text" placeholder="tìm kiếm" />
              <SearchSharpIcon className="icon"/>
            </div>
            <div className="items">
              <div className="item">
                  <LanguageSharpIcon className="icon"/>
                  English
              </div>
              <div className="item">
                  <DarkModeSharpIcon className="icon"/>
              </div>
              <div className="item">
                  <img src={UserImg} alt="" className="avatar" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarAdmin