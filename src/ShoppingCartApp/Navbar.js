import React from "react";

const Navbar=({cartItemsCount})=>{
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Shopping Cart</a>
            <span className="badge badge-pill bade-secondary">{cartItemsCount}</span>
        </nav>
    )
}
export default Navbar;