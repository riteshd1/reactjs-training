import React from "react";

function NavLink(){
    const navData = [
        {
            title:'Home',
            path:'/home',
            active:'active'
        },
        {
            title:'Link',
            path:'/link',
            active:''
        },
        {
            title:'Disabled',
            path:'/disabled',
            active:''
        },
        {
            title:'My Menu',
            path:'/my-menu',
            active:''
        }
    ];
    return (
        <>
        {
            navData.map(item=>{
                return (
                    <li className="nav-item">
                        <a className={`nav-link ${item.active}`} aria-current="page" href={item.path}>
                        {item.title}
                        </a>
                    </li>
                )
            })
        }
        </>
        
    );
}

export default NavLink;