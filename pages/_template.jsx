import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Navbars from '../components/Navbars/Navbars'

import '../static/scss/reset.scss'
import '../static/scss/base.scss'
import '../static/scss/typography.scss'
import '../static/scss/colors.scss'

class Template extends React.Component {
	render() {
		const {location, children} = this.props
		//const isHome = location.pathname === prefixLink('/') || location.pathname === prefixLink('/hacks/')
		//const bodyColor = isHome ? '#f4f4f4' : 'white'

		return (
			<div className='backgroundImage'
        style={{backgroundColor: '#000'}}>
				<Navbars {...this.props} />
				<div className='wrapper'>
				  { children }
				</div>
        <small>
          <a href="https://timwright.photography"
            target="_blank"
            className='imageSource'
          >
            Image Source
          </a>
        </small>
			</div>
		);
	}
}

Template.propTypes = {
	children: React.PropTypes.any,
	location: React.PropTypes.object,
	route: React.PropTypes.object,
}

export default Template