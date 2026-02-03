import React from 'react'

function Dashboard() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   <div className="container-fluid mt-4">
  <div className="row g-3">
    <div className="col-sm-6 col-lg-3">
      <div className="card bg-primary text-white shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 className="text-uppercase text-white-50">Users</h6>
            <h2 className="mb-0">1,250</h2>
          </div>
          <span className="fs-1">👥</span>
        </div>
      </div>
    </div>
    
   
    <div className="col-sm-6 col-lg-3">
      <div className="card bg-success text-white shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 className="text-uppercase text-white-50">Revenue</h6>
            <h2 className="mb-0">$8.4k</h2>
          </div>
          <span className="fs-1">💰</span>
        </div>
      </div>
    </div>
    

    <div className="col-sm-6 col-lg-3">
      <div className="card bg-warning text-dark shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 className="text-uppercase text-dark-50">Orders</h6>
            <h2 className="mb-0">320</h2>
          </div>
          <span className="fs-1">📦</span>
        </div>
      </div>
    </div>
    
   
    <div className="col-sm-6 col-lg-3">
      <div className="card bg-danger text-white shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 className="text-uppercase text-white-50">Support</h6>
            <h2 className="mb-0">12</h2>
          </div>
          <span className="fs-1">🛠️</span>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Dashboard