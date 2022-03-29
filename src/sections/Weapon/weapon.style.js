import styled from 'styled-components'
import BackGround from '../../assets/images/weapon/BackGround.svg'

const weapon_height = '1115px'

const WeaponWrapper = styled.div`
  height: ${weapon_height};
  /* height: 100%; */
  width: 100%;
  background-image: url(${BackGround});
  background-repeat: repeat;
  background-size: cover;
  background-position: top left;
  position: relative;
  top: -112px;
  right: 80px;
`

export default WeaponWrapper