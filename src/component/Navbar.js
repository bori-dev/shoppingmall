import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import '../App.css' 

const Navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login")
  }

  const search = (event) => {
     if(event.key === "Enter"){
       let keyword = event.target.value;
       

       navigate(`/?q=${keyword}`)
     }
  }
  
  return (
     <div>
      <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div className ="login-style"> 로그인 </div>
     
      </div>

      <div className="nav-section">
        <img width={200} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1SRAaTfX8RLUFagsXSUzJK6QOwvQ8_rnsQ&s" alt="logo"/>
      </div>
      
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}> 
              {menu} 
            </li>
          ))}
        </ul>

        <div className="search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="검색" onKeyPress={(event) => search(event)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar