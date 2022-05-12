import styled from 'styled-components/macro'

const Heading = styled.h1`
  color: ${({ theme }) => theme.headingColor};
  text-transform: uppercase;
`

export default Heading
