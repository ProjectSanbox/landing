import play_arrow from 'assets/images/gameplay/play_arrow.png'

export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <>
        <div className="arrow arrow-next">
            <span className="arrow-text">next</span>
            <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
            >
                <img src={play_arrow} />
            </div>
        </div>
      </>
    );
  }
  
  export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <>
            <div className="arrow arrow-pre">
                <div
                className={className}
                style={{ ...style}}
                onClick={onClick}
                >
                    <img src={play_arrow} />
            </div>
            <span className="arrow-text">previous</span>
            </div>
       </>
    );
  }