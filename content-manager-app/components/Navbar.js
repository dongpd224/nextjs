import Link from 'next/link'
const Navbar = ()=>{
    return(
        <>
        <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link href="/">
        <a className="navbar-item" >
          <img src="https://bulmatemplates.github.io/bulma-templates/images/bulma.png" alt="Logo"/>
        </a>
        </Link>
        <span className="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          <div className=" navbar-item">
            <div className="control has-icons-left">
              <input className="input is-rounded" type="email" placeholder="Search"/>
              <span className="icon is-left">
                <i className="fa fa-search"></i>
              </span>
            </div>
          </div>
          <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
            Home
          </a>
          <Link href="/resources/new">
            <a className="navbar-item is-size-5 has-text-weight-semibold">  Add</a>    
          </Link>
        </div>
      </div>
    </div>
  </nav>
        </>
    )
}
export default Navbar