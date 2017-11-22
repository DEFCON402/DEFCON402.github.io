import React from 'react'
import Helmet from 'react-helmet'
import {prefixLink} from 'gatsby-helpers'
import {config} from 'config'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
    displayName: 'HTML',
    propTypes: {
      body: React.PropTypes.string,
    },
    render() {
        const {body} = this.props
        const {title} = Helmet.rewind()
        const font = <link href='https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'/>
        const boldFont = <link href='https://fonts.googleapis.com/css?family=Archivo+Black|Open+Sans:100,400,500,700' rel='stylesheet' type='text/css'/>
        let scss
        if (process.env.NODE_ENV === 'production') {
            scss = <style dangerouslySetInnerHTML={{__html: require('!raw!./public/styles.css')}}/>
        }

        return (
            <html lang="en">
            <head>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
              {title.toComponent()}
              {font}
              {boldFont}
              {scss}
            </head>
            <body>
              <div id="react-mount"
                dangerouslySetInnerHTML={{__html: this.props.body}}/>
              <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)}/>
            </body>
            </html>
        )
    },
})
