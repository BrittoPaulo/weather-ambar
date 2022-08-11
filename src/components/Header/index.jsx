import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function index() {
  return (
    <nav className="nav-wrapper">
        <Link to='/' className="brand-logo space">Previsão do tempo</Link>
    </nav>
  )
}

export default index