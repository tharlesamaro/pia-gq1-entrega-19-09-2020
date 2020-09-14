import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

    constructor(props){
	    super(props);
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link key="/" className="nav-link" to="/">Escolas</Link>
                        <Link key="/cadastrar" className="nav-link" to="/cadastrar">Cadastrar</Link>
                        <Link key="/avaliar" className="nav-link" to="/avaliar">Avaliar</Link>
                        <Link key="/sobre" className="nav-link" to="/sobre">Sobre</Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;