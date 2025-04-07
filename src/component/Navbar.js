import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'; // 메뉴 아이콘 추가
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [menuOpen, setMenuOpen] = useState(false); // 사이드 메뉴 열고 닫기
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthenticate(false);
    navigate('/'); // 로그아웃 후 홈으로 리디렉션
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value.trim();
      if (keyword) {
        navigate(`/?q=${keyword}`);
      }
    }
  };

  const goToHome = () => {
    navigate('/'); // 로고 클릭 시 홈으로 이동
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // 사이드 메뉴 열기/닫기
  };

  return (
    <div>
      {/* 로그인 / 로그아웃 버튼 */}
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        {authenticate ? (
          <div className="login-style" onClick={handleLogout}>로그아웃</div>  
        ) : (
          <div className="login-style" onClick={goToLogin}>로그인</div> 
        )}
      </div>

      {/* 로고 영역 */}
      <div className="nav-section" onClick={goToHome}>
        <img
          width={200}
          height={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1SRAaTfX8RLUFagsXSUzJK6QOwvQ8_rnsQ&s"
          alt="logo"
        />
      </div>

      {/* 모바일 사이드 메뉴 버튼 */}
      <div className="menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>

      {/* 사이드 메뉴 */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </div>

      {/* 메뉴 리스트 (데스크탑용) */}
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>
              {menu}
            </li>
          ))}
        </ul>

        {/* 검색 바 */}
        <div className="search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="검색"
            onKeyPress={search}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
