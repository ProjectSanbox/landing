import bottomHeading from 'assets/images/background/backed-by-heading-footer.png'
import leftHeading from 'assets/images/background/left-heading.png'
import rightHeading from 'assets/images/background/right-heading.png'
import SectionWrapper from 'components/SectionWrapper'
import styled from 'styled-components/macro'
import SectionHeading from 'components/SectionHeading'

export const Wrapper = styled(SectionWrapper)`
  padding-top: 95px;
  position: relative;
  top: -19px;
`

const BaseHeading = styled(SectionHeading)``

export const AdvisorHeading = styled(BaseHeading)`
  display: inline-block;
  span {
    position: relative;
    display: inline-block;

    :after,
    :before {
      content: '';
      position: absolute;
      top: 50%;
      height: 2px;
      width: 444px;
      margin: 0 10px;
    }
    :before {
      right: 100%;
      background-image: url(${leftHeading});
    }
    :after {
      left: 100%;
      background-image: url(${rightHeading});
    }
  }
`

export const Heading = styled(BaseHeading)`
  display: inline-block;
  font-size: 48px;
  line-height: 48px;
  padding-bottom: 24px;
  margin-bottom: 48px;
  position: relative;

  :after {
    bottom: 0px;
    content: '';
    display: block;
    height: 4px;
    width: 254px;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    background-image: url(${bottomHeading});
  }
`

export const ListItemsWrapper = styled.div<{ gap?: string; marginBottom?: string }>`
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '64px')};
    gap: ${({ gap }) => (gap ? gap : '104px')};
  }
`
export const BackedByLink = styled.a<{ padding?: string | number }>`
  display: inline-block;
`
