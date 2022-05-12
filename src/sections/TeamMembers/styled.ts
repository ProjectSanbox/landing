import { lineBackground, teamsBackground } from 'assets'
import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  padding: 90px 0 55px 0;
  background: url(${teamsBackground}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  font-family: 'SFU Eurostile';
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: ${({ theme }) => theme.white};
  background-size: cover;
`

export const TopContent = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto 64px auto;

  p {
    color: #e1e1e1;
  }
`

export const Title = styled.h1`
  font-family: 'SFU Eurostile Bold';
  font-weight: 700;
  font-size: 60px;
  line-height: 60px;
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
  width: 25%;
  text-align: center;
  margin-bottom: 32px;
`
