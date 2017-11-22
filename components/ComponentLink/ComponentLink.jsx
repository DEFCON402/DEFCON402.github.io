import React from "react";
import { Link } from "react-router";
import styles from "./ComponentLink.scss";

export default function ComponentLink({ children, to }) {
  return (
    <li className="NavListItem">
      <Link
        activeClassName="ActiveComponentLink"
        className="ComponentLink"
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}
