function Navbar({fun}){
    return(
        /*<nav className="navbar navbar-light bg-light justify-content-between border"style={{  height: '72px',}}>
           <img src='whole.png' style={{ width: '162.58px', height: '24.01px', top: '-0.01px', left: '-0.01px' }} />
            <form className="form-inline">
                <i classNameName="fa-solid fa-magnifying-glass" style={{position:'relative', width: '22px', height: '22px', left: '390px',color:'#D3D3D3' }}></i>
                <input classNameName="form-control me-2" type="search" placeholder="     Search" aria-label="Search" style={{ width: '360px', height: '42px', marginLeft: '360px', borderRadius: '21px' }}/>
            </form>
            <div  style={{ width: '183px', height: '21px', MarginLeft: '540px' }}>
                <p>
                <span style={{ fontFamily: 'IBM Plex Sans', fontWeight: 700, fontSize: '16px', lineHeight: '20.8px', textAlign: 'right',color:'#2E2E2E' }}>Create account.</span>  <span style={{ fontFamily: 'IBM Plex Sans', fontWeight: 500, fontSize: '16px', lineHeight: '20.8px', textAlign: 'right',color:'#2F6CE5' }}>It's free!</span>
                </p>
            </div>
        </nav>*/
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 fixed-top d-none d-md-flex" style={{ height: '72px', backgroundColor: '#FFFFFF' }}>
      <a className="navbar-brand ml-md-4" href="#"><img src='whole.png' alt="Logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0 w-100 d-flex justify-content-center">
          <i className="fa-solid fa-magnifying-glass position-absolute"></i>
          <input className="form-control mr-sm-2 w-50 w-sm-100" type="search" placeholder="      Search for your favorite groups in ATG" aria-label="Search" style={{ height: '42px', borderRadius: '21px', fontFamily: 'IBM Plex Sans', fontWeight: '500', fontSize: '16px', lineHeight: '18.2px', color: '#5C5C5C', backgroundColor: '#F2F2F2' }} />
        </form>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown mr-md-4">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={fun}>
              <span style={{ fontFamily: 'IBM Plex Sans', fontWeight: 700, fontSize: '16px', lineHeight: '20.8px', textAlign: 'right', color: '#2E2E2E' }} >Create account.</span>
              <span style={{ fontFamily: 'IBM Plex Sans', fontWeight: 500, fontSize: '16px', lineHeight: '20.8px', textAlign: 'right', color: '#2F6CE5' }}> It's free!</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    )
}
export default Navbar;