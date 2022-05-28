import { Social } from 'models/social.model'
import React, { FC, memo } from 'react'
import { SocialItem, SocialsContent, SocialsWrapper } from './styled'

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
