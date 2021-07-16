import styled from 'styled-components';

const ExhibitionWrapper = styled.div`
    @media only screen and (max-width: 600px){
        .exhibition{
            margin-top: 120px!important;
        }

        .exhibition{
            height: 450px!important;
            iframe{
                height: 450px!important;
            }
        }
    }
`;

export default ExhibitionWrapper;