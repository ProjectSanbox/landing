import { Social } from 'models/social.model'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import leftBorder from 'assets/images/social/left-border.png'

type SocialProps = { socials: Social[] }

const SocialLinks: FC<SocialProps> = ({ socials }) => {
  return (
    <SocialsWrapper>
      <SocialsContent>
        {socials.map((social, index) => (
          <SocialItem key={index}>
            <a href={social.url} target="_blank" rel="noreferrer">
              <img src={social.image} />
            </a>
          </SocialItem>
        ))}
      </SocialsContent>
    </SocialsWrapper>
  )
}

export default memo(SocialLinks)

const SocialsWrapper = styled.div`
  position: absolute;
  left: 45px;
  bottom: 105px;
`

const SocialsContent = styled.div`
  padding: 23px 20px;
  position: relative;

  :before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 410px;
    width: 8px;
    background-image: url(${leftBorder});
  }
`

const SocialItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`
