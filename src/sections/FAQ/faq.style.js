import styled from 'styled-components';

const FAQWrapper = styled.div`
    .FAQ-heading{
        text-align: center;
    }

    div.FAQ-row{
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        .FAQ-content{
            width: 47%;
            display: flex;
            flex-direction: column;
            .FAQ-ques{
                margin-bottom: 30px;
                color: black;
                div.FAQ-box{
                    display: flex;
                    justify-content: space-between;
                    padding: 20px;
                    background: ${props => props.theme.primaryColor};
                    .ques-heading{
                        color: black;
                        font-size: 20px;
                        font-weight: 700;
                    }

                    svg{
                        font-size: 30px;
                        margin-left: 40px;
                        cursor: pointer;
                        user-select: none;
                        transition: 0.5s;
                    }
                }

                .FAQ-ans{
                    padding:  10px;
                    background: ${props => props.theme.primaryColor};
                    display: none;
                    p{
                        color: black;
                        ul{
                            padding-left: 10px;
                        }
                    }
                }
                
                .FAQ-ans.show{
                    display: block;
                    animation: showBlock 0.5s;
                }

                @keyframes showBlock{
                    from{
                        height: 0px;
                        opacity: 0;
                    }

                    to{
                        height: 100%;
                        opacity: 1;
                    }
                }
            }
        }
    }
`;

export default FAQWrapper;