import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'

class SiteIndex extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={ config.siteTitle }/>
        <div className='content'>
          <div className='main'>
            <div className='main-inner'>
              <div className='blog-page'>
                <div className='text'>
                  <div className='page-title'>
                    <div className='highlight-title'>
                      Welcome to the <div className='bold-text'>Omaha Defcon Chapter.</div>
                    </div>
                  </div>
                  <div className='home-divs'>
                    Feel free to check out our <a href='/schedule/'>Schedule</a> for upcoming events!
                  </div>
                  <div className='home-divs'>
                    Or connect with us on <a href='/connect/'>Social Media.</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SiteIndex.propTypes = {
    route: React.PropTypes.object,
}

export default SiteIndex
