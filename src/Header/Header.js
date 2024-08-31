import React, { useState } from 'react';
import "./Header.css"

const  Header=() =>{
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleToggle = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  const handleDropdownClick = (dropdownId) => {
    setActiveDropdown(dropdownId);
  };

  return (
    <div className={`Header ${isOffcanvasOpen ? 'offcanvas-open' : ''}`}>
      <nav className="navbar navbar-expand-lg py-6 py-lg-0 shadow">
        <div className="container px-4">
        <img src="https://html.cwsthemes.com/inspire/assets/images/retina-logo.png" style={{ width: '150px' }} alt="logo" />
          <button
            className="navbar-toggler border-0 scale-down"
            type="button"
            onClick={handleToggle}
            aria-controls="top-navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`offcanvas offcanvas-end ${isOffcanvasOpen ? 'show' : ''}`}
            tabIndex="-1"
            id="top-navbar"
            aria-labelledby="top-navbarLabel"
          >
            <button
              className="navbar-toggler border-0"
              type="button"
              onClick={closeOffcanvas}
              aria-controls="top-navbar"
            >
              <div className="d-flex justify-content-end p-2">
                <span aria-hidden="true" className='closeIcon'>&times;</span>
              </div> 
            </button>
            <ul className="navbar-nav ms-lg-auto p-4 p-lg-0">
              <li className="nav-item px-3 px-lg-0 py-1 py-lg-4 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#home"
                  role="button"
                  onmouseOver={() => handleDropdownClick('home')}
                >
                  Home<span className="addIcon">+</span>
                </a>
                <ul className={`dropdown-menu ${activeDropdown === 'home' ? 'show' : ''}`}>
                  <li className="item"><a className='item-link' href="/home-page1">Home 1</a></li>
                  <li className="item"><a className='item-link' href="#1">Home 2</a></li>
                  <li className="item"><a className='item-link' href="#home">Home 3</a></li>
                </ul>
              </li>
              <li className="nav-item px-3 px-lg-0 py-1 py-lg-4 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#pages"
                  role="button"
                  onmouseOver={() => handleDropdownClick('pages')}
                >
                  Pages<span className="addIcon">+</span>
                </a>
                <ul className={`dropdown-menu ${activeDropdown === 'pages' ? 'show' : ''}`}>
                  <li className="item"><a className='item-link' href="#pages">Team</a></li>
                  <li className="item"><a className='item-link' href="#pages">About Us</a></li>
                  <li className="item"><a className='item-link' href="#pages">Services</a></li>
                  <li className="item"><a className='item-link' href="#pages">Pricing Plans</a></li>
                  <li className="item"><a className='item-link' href="#pages">Gallery</a></li>
                </ul>
              </li>
              <li className="nav-item px-3 px-lg-0 py-1 py-lg-4 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#blog"
                  role="button"
                  onmouseOver={() => handleDropdownClick('blog')}
                >
                  Blog <span className="addIcon">+</span>
                </a>
                <ul className={`dropdown-menu ${activeDropdown === 'blog' ? 'show' : ''}`}>
                  <li className="item"><a className='item-link' href="#blog">Blog</a></li>
                  <li className="item"><a className='item-link' href="#blog">Blog With Sidebar</a></li>
                  <li className="item"><a className='item-link' href="#blog">Blog With Detail</a></li>
                </ul>
              </li>
              <li className="nav-item px-3 px-lg-0 py-1 py-lg-4 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#portfolio"
                  role="button"
                  onmouseOver={() => handleDropdownClick('portfolio')}
                >
                  Portfolio <span className="addIcon">+</span>
                </a>
                <ul className={`dropdown-menu ${activeDropdown === 'portfolio' ? 'show' : ''}`}>
                  <li className="item"><a className='item-link' href="#protfolio">Portfolio 2 Columns</a></li>
                  <li className="item"><a className='item-link' href="#protfolio">Portfolio 3 Columns</a></li>
                  <li className="item"><a className='item-link' href="#protfolio">Portfolio Masonry</a></li>
                  <li className="item"><a className='item-link' href="#protfolio">Portfolio Pinterest</a></li>
                  <li className="item"><a className='item-link' href="#protfolio">Portfolio Detail</a></li>
                </ul>
              </li>
              <li className="nav-item px-3 px-lg-0 py-1 py-lg-4 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#shop"
                  role="button"
                  onmouseOver={() => handleDropdownClick('shop')}
                >
                  Shop<span className="addIcon">+</span>
                </a>
                <ul className={`dropdown-menu ${activeDropdown === 'shop' ? 'show' : ''}`}>
                  <li className="item"><a className='item-link' href="#shop">Shop</a></li>
                  <li className="item"><a className='item-link' href="#shop">Shop With Sidebar</a></li>
                  <li className="item"><a className='item-link' href="#shop">Shop With Detail</a></li>
                </ul>
              </li>
              <li className="nav-item px-3 px-lg-0 py-1 py-lg-4">
                <a className="nav-link" href="/contant">Contacts <span className="addIcon">+</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
