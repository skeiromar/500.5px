import React from 'react'

export default function Navbar({handleDiscover, user, pushProfilePage, handleLogout, openModal}) {
  return (
    <nav className="perm-navbar">
    <ul className="perm-navbar-ul-elems">
      <li>
        <a href="/#/" className="perm-navbar-ul-elems-logo" style={{cursor: 'pointer'}}>
          500.5px
        </a>
      </li>
      <li>
        <a onClick={handleDiscover} style={{cursor: 'pointer'}}>Discover</a>
      </li>
      <li>
        <a href="/#/about" style={{cursor: 'pointer'}}>About</a>
      </li>
    </ul>
    <ul className="perm-navbar-ul-elems perm-right-ul-elems">
      <li>
        <div className="dropdown">

          {user.pictureUrl
            ? <img
                src={`${user.pictureUrl}`}
                onClick={pushProfilePage}
                className="icon-avatar"/>
            : null}
          <div className="dropdown-content">
            <ul>
              <li>
                <a href="">My Profile</a>

              </li>
              <li>
                <a href="">My Stats</a>

              </li>
              <li>
                <a href="">My Galleries</a>

              </li>
              <li>
                <a href="">My Liked Photos</a>

              </li>
              <p className="hline"></p>
              <li>
                <a href="">My Settings</a>

              </li>
              <li>
                <a href="">Manage Photos</a>

              </li>
              <li>
                <a >About</a>

              </li>
              <li>
                <a onClick={handleLogout}>Log Out</a>

              </li>
            </ul>
          </div>
        </div>
      </li>
      <li style={{cursor: 'pointer'}}>
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
