import styled from 'styled-components';

const FAQWrapper = styled.div`
padding-bottom: 80px;

a{
    color: #3366FF;
}

.FAQ-heading{
    text-align: center;
}

.accordion{
    margin-top: 60px;
}

.accordion .accordion-item {
  border-bottom: 1px solid #e5e5e5;
}

.accordion .accordion-item button[aria-expanded='true'] {
  border-bottom: 1px solid ${props => props.theme.primaryColor};
}

.accordion button {
  position: relative;
  display: block;
  text-align: left;
  width: 100%;
  padding: 1em 0;
  color: #ffffff;
  font-size: 1.15rem;
  font-weight: 400;
  border: none;
  background: none;
  outline: none;
}

.accordion button:hover,
.accordion button:focus {
  cursor: pointer;
  color: ${props => props.theme.primaryColor};
}

.accordion button:hover::after,
.accordion button:focus::after {
  cursor: pointer;
  color: ${props => props.theme.primaryColor};
  border: 1px solid ${props => props.theme.primaryColor};
}

.accordion button .accordion-title {
  padding: 1em 1.5em 1em 0;
}

.accordion button .icon {
  display: inline-block;
  position: absolute;
  top: 18px;
  right: 0;
  width: 22px;
  height: 22px;
  border: 1px solid;
  border-radius: 22px;
}

.accordion button .icon::before {
  display: block;
  position: absolute;
  content: '';
  top: 9px;
  left: 5px;
  width: 10px;
  height: 2px;
  background: ${props => props.theme.primaryColor};
}
.accordion button .icon::after {
  display: block;
  position: absolute;
  content: '';
  top: 5px;
  left: 9px;
  width: 2px;
  height: 10px;
  background: ${props => props.theme.primaryColor};
}

.accordion button[aria-expanded='true'] {
  color: ${props => props.theme.primaryColor};
}
.accordion button[aria-expanded='true'] .icon::after {
  width: 0;
}
.accordion button[aria-expanded='true'] + .accordion-content {
  opacity: 1;
  max-height: 90em;
  transition: all 200ms linear;
  will-change: opacity, max-height;
}
.accordion .accordion-content {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 200ms linear, max-height 200ms linear;
  will-change: opacity, max-height;
}
.accordion .accordion-content p {
    font-size: 18px;
}

@media only screen and (max-width: 576px){
    .accordion button .accordion-title{
        font-size: 16px;
        margin-bottom: unset;
        max-width: 320px;
    }

    .accordion .accordion-content p{
        margin-bottom: 0.5em;
    }

    .accordion button{
        display: flex;
        align-items: center;
    }
}
`;

export default FAQWrapper;