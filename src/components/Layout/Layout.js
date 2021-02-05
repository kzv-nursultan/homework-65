import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Layout = props => {
    return(
        <>
            <header className="d-flex justify-content-between p-4 bg-success text-white align-items-center">

                <div>
                    <h2>
                        Some Text
                    </h2>
                </div>

                <nav>
                <NavLink to="/" className="text-white">| Home |</NavLink>
                <NavLink to="/about" className="p-2 text-white">| About |</NavLink>
                <NavLink to="/contacts" className="p-2 text-white">| Contacts |</NavLink>
                <NavLink to="/news" className="p-2 text-white">| News |</NavLink>
                <NavLink to="/documentation" className="p-2 text-white">| Documentaion |</NavLink>
                <NavLink to="/edit" className="p-2" style={{color:'black'}}>| Admin |</NavLink>
                </nav>

            </header>

            <main className="container p-5 m-5">
                {props.children}
            </main>

            <footer className="bg-dark text-white p-3 d-flex justify-content-between">
                <span>
                    Created by: 
                    <strong>kzv-nursultan</strong>
                </span>
                <NavLink to="/" className="text-white">| Home |</NavLink>
            </footer>
        </>
    );
};

export default Layout;