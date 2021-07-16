import styled from 'styled-components';

const SnowWrapper = styled.div`
    .snow {
	position: absolute;
	min-width: 100vw;
	min-height: 100%;
	height: 100%;
	width: 100%;
	top: 580px;
	left: 0;
    z-index: -999;
}

.snow .svg {
	position: absolute;
	width: 100%;
	height: 100%;
    z-index: -1;
}

#snow-top-layer {
	will-change: transform;
	transform: translateY(-768px);
	animation: fall 22.5s infinite linear;
}

#snow-bottom-layer {
	will-change: transform;
	transform: translateY(-768px);
	animation: fall 45s infinite linear;
}

@keyframes fall {
	
	100% {
		transform: translateY(0);
	}
	
}

@media only screen and (max-width: 768px){
    .snow{
        min-height: 2800px;
    }
}
`;

export default SnowWrapper;