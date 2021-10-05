import styled from 'styled-components';

const ContractWrapper = styled.div`
    position: fixed;
    bottom: 20px;
    width: 100%;
    z-index: 99;
    .contract{
        width: 100%;
        background: rgba(255,255,0,.1);
        text-align: center;
        border-radius: 5px;
        padding: 10px 0px;
        position: relative;
        p{
            padding: 0px;
            margin: 0;
            font-size: 15px;
        }
        a{
            color: ${props => props.theme.primaryColor};
        }

        button{
            position: absolute;
            width: unset;
            height: unset;
            right: 0px;
            top: 0px;
            svg{
                font-size: 20px;
                color: 	#EE0000;
            }
        }
    }
`;

export default ContractWrapper;