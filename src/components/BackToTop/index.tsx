import React from 'react'
import useScrollPosition from '@react-hook/window-scroll'
import styled from 'styled-components/macro'

const BackToTop = () => {
  const scrollY = useScrollPosition()
  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <ScrollTopWrapper>
      {scrollY > 2200 && (
        <button onClick={topFunction}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
          </svg>
        </button>
      )}
    </ScrollTopWrapper>
  )
}
export default BackToTop

const ScrollTopWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 15%;
  transform: translateY(-90%);
  z-index: 9999;
  button {
    background: ${({ theme }) => theme.primaryColor};
    width: 50px;
    height: 50px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    svg {
      font-size: 30px;
      color: #000000;
    }
  }
`
