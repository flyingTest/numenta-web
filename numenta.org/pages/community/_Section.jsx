// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import Image from '../../components/Image'
import Paragraph from '../../components/Paragraph'
// import TextLink from '../../components/TextLink'

import ImageOpensource from './images/image.png'
import styles from './index.css'


/**
 * Open Source Community main Section/Page - React view component.
 */
const SectionOpensource = (props, {config}) => {
  const {links} = config

  return (
    <article className={styles.columns}>
      <div className={styles.aside}>
        <Image
          alt="Numenta Open Source Hackathon Event"
          respond="mw"
          src={ImageOpensource}
        />
      </div>
      <div className={styles.content}>
        <Paragraph lead={true}>
          Because we want our technology to be broadly adopted, we make it
          widely accessible in an open source community. There you’ll find our
          algorithms, daily research, source code, and an active discussion
          forum with HTM community members covering a variety of topics.
        </Paragraph>
        <Paragraph>
          You’ll also find our implementation of HTM theory, called NuPIC
          (Numenta Platform for Intelligent Computing), which is written in C++
          and Python. Other implementations have been ported from NuPIC into
          other languages by community members. {links.in.home}
        </Paragraph>
      </div>
    </article>
  )
}

SectionOpensource.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionOpensource
