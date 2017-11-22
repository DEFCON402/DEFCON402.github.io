import React from 'react'
import {RouteHandler, Link} from 'react-router'
import sortBy from 'lodash/sortBy'
import access from 'safe-access'
import {prefixLink} from 'gatsby-helpers'
import NavLink from '../NavLink/NavLink'
import ComponentLink from '../ComponentLink/ComponentLink'
import { TYPES } from "../Icon/Icon";
import './Navbars.scss'

class Navbars extends React.Component {
  render() {
    /************************
      Primary Nav Formation
    *************************/

    // Get primary-nav-pages only
    let primaryNavLinks = this.props.route.pages.filter((ele) => {
      if (ele.requirePath.indexOf('primary-nav-pages') === 0) {
        return ele;
      }
    })

    // Sort links based on priority
    primaryNavLinks = sortBy(primaryNavLinks, (page) => access(page, 'data.priority'))

    // Iterate over every nav in that folder and create NavLink.
    const primaryNav = primaryNavLinks.map((navPage) => {
      let iconType = navPage.data.iconType
      let href = navPage.data.href
      let title = navPage.data.navTitle ? navPage.data.navTitle : navPage.data.title;
      if (!navPage.data.hide) {
        return (
          <NavLink to={prefixLink(navPage.data.path)}
            iconType={iconType}
            href={href}
            key={title}>
            {title}
          </NavLink>
        )
      }
    })

    /************************
      Secondary Nav Formation
    *************************/

    // Get primary-nav-pages only
    let secondaryNavLinks = this.props.route.pages.filter((ele) => {
      if (ele.requirePath.indexOf('secondary-nav-pages') === 0) {
        return ele;
      }
    })

    // Sort links based on priority
    secondaryNavLinks = sortBy(secondaryNavLinks, (page) => access(page, 'data.priority'))

    // Iterate over every nav in that folder and create NavLink.
    const secondaryNav = secondaryNavLinks.map((navPage) => {
      let title = navPage.data.navTitle ? navPage.data.navTitle : navPage.data.title;
      if (!navPage.data.hide) {
        return (
          <ComponentLink to={prefixLink(navPage.data.path)}
            key={title}>
            {title}
          </ComponentLink>
        )
      }
    })

    const {location} = this.props
    return (
      <div className="headerRow">
        <div className="logoRow">
          <Link className="ReactContainer"
            to="/">
            <div className="PrimaryLogoText">defcon</div>
            <div className="SecondaryLogoText">402</div>
          </Link>

          <ul className="NavList">
            {primaryNav}
          </ul>
        </div>

        <div className="HighOrderComponentList">
          {secondaryNav}
        </div>
      </div>
    );
  }
}

Navbars.propTypes = {
  location: React.PropTypes.object,
}

export default Navbars
