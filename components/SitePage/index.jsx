import React from 'react'
import moment from 'moment'
import {RouteHandler, Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import access from 'safe-access'
import {config} from 'config'
import SiteLinks from '../SiteLinks'

import './style.scss';


class SitePage extends React.Component {
  render() {
    const {route} = this.props
    const post = route.page.data
    const title = post.boldText
      ? <div className='highlight-title'><span className='bold-text'>{post.boldText}</span>{post.highlightTitle}</div> 
      : post.title
    const className = post.className ? post.className : ''
    const bigIcons = post.bigIcons ? post.bigIcons : ''

    return (
      <div>
        <div className='content'>
          <div className='main'>
            <div className='main-inner'>
              <div className='blog-page'>
                <div className='text'>
                  <div className='page-title'>{title}</div>
                  <div className={className} dangerouslySetInnerHTML={{__html: post.body}}/>
                  <SiteLinks bigIcons={bigIcons}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SitePage.propTypes = {
  route: React.PropTypes.object.isRequired,
}

export default SitePage
