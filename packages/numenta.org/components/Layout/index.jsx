// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import Footer from 'numenta-web-shared-components/Footer'
import Main from 'numenta-web-shared-components/Main'
import TextLink from 'numenta-web-shared-components/TextLink'

import Header from '../Header'
import Logo from '../Logo'

import styles from './index.css'


/**
 * Site Layout wrapper - React view component.
 */
const Layout = ({children}, {config}) => {
  const {links} = config

  return (
    <div className={styles.layout}>
      <Header
        logo={
          <TextLink to={links.in.home}>
            <Logo />
          </TextLink>
        }
      />
      <Main>
        {children}
        <Footer />
      </Main>
    </div>
  )
}

Layout.contextTypes = {
  config: React.PropTypes.object,
}

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Layout
