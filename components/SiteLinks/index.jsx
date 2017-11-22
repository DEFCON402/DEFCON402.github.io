import React from 'react'
import {RouteHandler, Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import {config} from 'config'
import './style.scss'
import '../../static/fonts/fontawesome/style.scss'

export default function SiteLinks({bigIcons}) {
  const linksClass = bigIcons
    ? 'big-icons'
    : ''

  return (
    <div className={`blog-social ${linksClass}`}>
      <ul>
        <li>
          <a href={config.siteTwitterUrl}><i className='fa fa-twitter'></i></a>
        </li>
        <li>
          <a href={config.siteGithubUrl}><i className='fa fa-github-alt'></i></a>
        </li>
        <li>
          <a href={config.sitelinkedInUrl}><i className='fa fa-linkedin'></i></a>
        </li>
        <li>
          <a href={config.siteEmailUrl}><i className='fa fa-envelope-o'></i></a>
        </li>
        <li>
          <a href={config.siteFacebookUrl}><i className='fa fa-facebook'></i></a>
        </li>
      </ul>
    </div>
  );
}

        // <li>
        //   <a href={config.siteYouTubeUrl}><i className='fa fa-youtube-play'></i></a>
        // </li>