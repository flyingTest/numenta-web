// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import catchLinks from 'catch-links'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'
import url from 'url'

import {triggerGAnalyticsEvent} from '../../utils/client'

import styles from './index.css'


/**
 *
 */
class Markdown extends React.Component {

  static propTypes = {
    children: React.PropTypes.node.isRequired,
  }

  static contextTypes = {
    route: React.PropTypes.object,
    router: React.PropTypes.object,
  }

  componentDidMount() {
    const {router} = this.context
    const {location} = global.window

    // Take over markdown local content links, local links now in Single-page
    //  app mode - also handling staging prefixLinks.
    catchLinks(this._markdown, (href) => {
      const target = url.parse(href)
      const newHref = prefixLink(href)

      // @TODO catchLinks should also stop non-https? protocols from working
      if (!href.match(/https?:/)) {
        return true
      }

      if (!target.host && !target.hash && (
        target.pathname.match(/^\/assets\//) || target.pathname.match(/\.pdf$/)
      )) {
        triggerGAnalyticsEvent(newHref)
        location.href = newHref  // go to internal asset
      }
      else if (!target.host && target.hash && (
        target.pathname === location.pathname
      )) {
        location.hash = target.hash  // go to anchor on same page / browser
      }
      else {
        router.push(newHref)  // same site react-routed single-page
      }
      return false
    })
  }

  render() {
    const {children} = this.props

    return (
      <div
        className={styles.markdown}
        ref={(ref) => this._markdown = ref}
      >
        {children}
      </div>
    )
  }

}

export default Markdown
