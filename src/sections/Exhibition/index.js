import React from "react";
import ExhibitionWrapper from './exhibition.style';


const Exhibition = () => {


    return (
        <ExhibitionWrapper>
            <div className="exhibition" style={{width:'100%', height:500,marginTop:'81px'}}>
                <iframe style={{width:'100%', height:500, border:'none'}} src='https://vr-art.nmb.com.vn/' />
            </div>
        </ExhibitionWrapper>
    );
};

export default Exhibition;
