import styled from 'styled-components/macro'
import { Row, Col } from 'react-bootstrap'

export const FooterWrapper = styled.div`
  font-size: 14px;
  line-height: 28px;
  color: ${({ theme }) => theme.white};
  padding: 80px 0px;
  background: ${({ theme }) => theme.footerBg};
  margin-top: -20px;
`

export const FooterContent = styled(Row)``

export const FooterHeadingWrapper = styled(Col)``

export const FooterMenusWrapper = styled(Col)``

export const FooterMenuTitle = styled.h3`
  font-family: 'SFU Eurostile Bold';
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.primaryColor};
  text-transform: uppercase;
`

export const MenuList = styled.ul`
  margin-bottom: 40px;
  && {
    li {
      margin-bottom: 18px;

      a {
        .item-icon {
          width: 24px;
          height: 24px;
          margin-right: 8px;
        }
        color: ${({ theme }) => theme.white};
        transition: 0.3s;
        :hover {
          padding-left: 5px;
          color: ${({ theme }) => theme.primaryColor};
        }
      }
    }
  }
`
