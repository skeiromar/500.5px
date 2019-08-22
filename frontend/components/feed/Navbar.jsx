import React from 'react'

export default function Navbar({handleDiscover, user, pushProfilePage, handleLogout, openModal}) {
  return (
    <nav className="perm-navbar">
      <ul className="perm-navbar-ul-elems">
        <li>
          <a
            href="/#/"
            className="perm-navbar-ul-elems-logo"
            style={{
            cursor: 'pointer'
          }}>
            500.5px
          </a>
        </li>
        <li className="nav-stuff">
          <a onClick={handleDiscover} style={{
            cursor: 'pointer'
          }}>Discover</a>
        </li>
        <li className="nav-stuff">
          <a
            href="https://skeiromar.github.io/My-Portfolio-Site/"
            style={{
            cursor: 'pointer'
          }}>About</a>
        </li>
      </ul>
      <ul className="perm-navbar-ul-elems perm-right-ul-feed">
        <li>
          <div className="dropdown">
            {user.pictureUrl
              ? <img
                  src={`${user.pictureUrl}`}
                  onClick={pushProfilePage}
                  className="icon-avatar"/>
              : null}
              <div className="dropdown-new">
                <a onClick={pushProfilePage}>My Profile</a>
                <a href="https://skeiromar.github.io/My-Portfolio-Site/" target="_blank">About</a>
                <a onClick={handleLogout}>Log Out</a>
              </div>
          </div>
        </li>
        <li style={{
          cursor: 'pointer'
        }}>
          <a className="nav-upload-icon" onClick={openModal}>
            <i className="fas fa-cloud-upload-alt cloud-margin-right"></i>
            <span>
              <button >upload</button>

            </span>
          </a>
        </li>
      </ul>

      <br/>
    </nav>
  )
}
