import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <ul className='nav'>
                <li>
                    <Link to='/'>Home Page </Link>
                </li>
                <li>
                    <Link to='/datatable'>DataTable</Link>
                </li>
            </ul>
        </div>
    )
}
