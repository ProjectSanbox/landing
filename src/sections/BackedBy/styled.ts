import bottomHeading from 'assets/images/background/backed-by-heading-footer.png'
import leftHeading from 'assets/images/background/left-heading.png'
import rightHeading from 'assets/images/background/right-heading.png'
import SectionWrapper from 'components/SectionWrapper'
import styled from 'styled-components/macro'

export const Wrapper = styled(SectionWrapper)`
  padding-top: 95px;
  position: relative;
  top: -19px;
`

const Heading = styled.h3`
  display: inline-block;
  font-family: 'Square721 BT Bold';
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  text-shadow: 0px 0px 3px #ffd600;
`

export const AdvisorHeading = styled(Heading)`
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

export const SectionHeading = styled(Heading)`
  display: inline-block;
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

export const ListItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const BackedByLink = styled.a<{ padding?: string | number }>`
  display: inline-block;
  padding: ${({ padding }) => (padding ? padding : '33px 52px')};
`
