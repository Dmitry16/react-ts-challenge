import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants/routes'; // import routes

export default function Navigation() {
  const location = useLocation(); // to track the current location

  // Helper function to check if the current route matches
  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <nav>
      <ul>
        {ROUTES.map((route) => (
          <li key={route.url}>
            <Link to={route.url} className={isActive(route.url)}>
              {route.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
