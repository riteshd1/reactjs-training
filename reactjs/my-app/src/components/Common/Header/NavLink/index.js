import React from "react";

function NavLink(props) {
    console.log("props",props)
    const {title, active, path} = props;
  return (
    <>
      <li className="nav-item">
        <a className={`nav-link ${active}`} aria-current="page" href={path}>
          {title}
        </a>
      </li>
    </>
  );
}

export default NavLink;
