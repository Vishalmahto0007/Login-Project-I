import React from 'react'
import {Link} from "react-router-dom"

const navbar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-light bg-light justify-content-between">
     <a class="navbar-brand">Welcome here...!!</a>
       <form class="form-inline">
    {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
    <Link to="/"><button class="btn btn-outline-success my-2 " id="na" >Log in</button></Link>
    <Link to="/signup"><button class="btn btn-outline-success my-2 " id="na">Sign up</button></Link>
  </form>
</nav>
        </div>
    )
}

export default navbar;
