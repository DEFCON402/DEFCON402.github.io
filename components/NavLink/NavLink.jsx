import React from "react";
import "./NavLink.scss";
import Icon from "../Icon/Icon";
import {RouteHandler, Link} from 'react-router'

export default function NavLink({children, href, iconType, to}) {
	let link;

	let icon = iconType ? <Icon className="Icon" type={iconType} /> : '';

  if (to) {
    link = (
      <Link activeClassName="ActiveNavLink"
        className="NavLink"
        to={to}
      >
        {icon} {children}
      </Link>
    );
  } else {
    link = (
      <a className="NavLink" href={href}>
        {icon} {children}
      </a>
    );
  }

  return (
    <li className="NavListItem">
      {link}
    </li>
  );
}
