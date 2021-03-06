// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import {config} from 'config'
import Helmet from 'react-helmet'
import {prefixLink} from 'gatsby-helpers'
import React from 'react'
import root from 'window-or-global'

import Pingdom from 'numenta-web-shared-components/lib/Pingdom'
import {stampUrl} from 'numenta-web-shared-utils/lib/universal'


/**
 * Main Numenta.org HTML5 Document skeleton - React view component. Base file
 *  for Gatsby.js framework.
 * @author Numenta <info@numenta.com>
 * @copyright © 2005—2017 Numenta <http://numenta.com>
 * @license MIT
 * @requires gatsby react
 */
const HtmlDocument = ({body}) => {
  const {STAMP} = root
  const {analytics} = config
  const {htmlAttributes, link, meta, style, title} = Helmet.rewind()
  const attrs = htmlAttributes.toComponent()

  // Gatsby provides HTML5 !doctype at render-time
  return (
    <html {...attrs}>
      <head>
        {title.toComponent()}
        {meta.toComponent()}
        {style.toComponent()}
        {link.toComponent()}
        <Pingdom id={analytics.pingdom} />
      </head>
      <body className="body">
        <div id="react-mount" dangerouslySetInnerHTML={{__html: body}} />
        <script src={prefixLink(stampUrl('/bundle.js', STAMP))} />
      </body>
    </html>
  )
}

HtmlDocument.propTypes = {
  body: React.PropTypes.string.isRequired,
}

export default HtmlDocument
