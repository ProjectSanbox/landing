import { lineBackground } from 'assets'
import SectionHeading from 'components/SectionHeading'
import SectionWrapper from 'components/SectionWrapper'
import styled from 'styled-components/macro'

export const Wrapper = styled(SectionWrapper)`
  padding: 90px 0 55px 0;
  margin-top: -15px;
  font-family: 'SFU Eurostile';
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: ${({ theme }) => theme.white};

  .slick-dots {
    margin-bottom: 0;
    li {
      width: 10px;
      height: 10px;
      background: rgba(156, 41, 50, 0.5);
      border-radius: 16px;
      &.slick-active {
        background: ${({ theme }) => theme.brand};
      }
    }
  }
`

export const TopContent = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto 64px auto;

  p {
    color: #e1e1e1;
  }
`

export const Heading = styled(SectionHeading)`
  margin-bottom: 20px;
`

export const SubTitle = styled.h3``

export const Line = styled.hr`
  width: 706px;
  height: 2px;
  background: url(${lineBackground}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`

export const MembersListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1248px;
  margin: 0 auto 64px auto;
`

export const ItemWrapper = styled.div`
  text-align: center;
  margin-bottom: 32px;
`
