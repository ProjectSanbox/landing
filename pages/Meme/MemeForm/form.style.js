import styled from 'styled-components';

const FormWrapper = styled.div`
padding: 80px 0px;
background: #252525;
    .meme_heading{
        text-align: center;
    }

    h1{
        font-size: 48px;
    }

    p{
        margin: 30px 0px;
    }

    form{
        border-radius: 16px;
        padding: 40px 150px;
        margin-top: 40px;
        a{
            color: #42B9FF;
            display: inline-block;
        }
        .form-group{
            margin-bottom: 30px;
            label{
                color: #ffffff;
            }

            input{
                border-radius: 40px;
                padding-left: 20px;
                background: transparent;
                border: 1px solid #808080;
                color: #ffffff;
            }

            span{
                color: #9C2932;
            }
        }

        .form-heading{
            font-size: 24px;
            text-transform: uppercase;
            font-family: 'Goma Block', sans-serif;
        }

        button{
            background: #42B9FF;
            color: #ffffff;
            border-radius: 40px;
        }
    }

    .message_container {
	filter: drop-shadow(0 0 8px cyan);
    position: fixed;
    top: 100px;
    right: 50px;
    display: none;
	
	.message {
		background: #000;
		border: 2px cyan;
		width: calc(100% - 20px);
		max-width: 640px;
		margin: 0 auto;
		overflow: hidden;
		transition: all .5s;
		
		.title {
			display: inline-block;
			padding: .5em 2em;

			font-weight: bold;
			letter-spacing: .1em;
			text-align: center;
			text-transform: uppercase;
			--aug-inset: .25em;
			--aug-inset-bg: #ff0;
			--aug-br: .75em;
		}
		p {
			color: #fff;
			padding: 1em;
			margin: 0;
			display: block;
			line-height: 1.4em;
			text-align: justify;
			max-height: 10em;
		}
	}
}

    @media only screen and (max-width: 991px){
        form{
            padding: 40px 50px;
        }
    }

    @media only screen and (max-width: 600px){
        form{
            padding: 40px 0px;
        }
    }

    @media only screen and (max-width: 435px){
        form{
            padding: 40px 0px;

            a{
                max-width: 300px;
            }
        }
    }
`;

export default FormWrapper;