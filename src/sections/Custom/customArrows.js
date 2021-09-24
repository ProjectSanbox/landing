import play_arrow from 'assets/images/gameplay/play-arrow.png'
import './style.css';

export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <>
        <div>
            <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
            >
                <img src={play_arrow } />
            </div>
        </div>
      </>
    );
  }
  
  export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <>
            <div>
                <div
                className={className}
                style={{ ...style}}
                onClick={onClick}
                >
                  <img src={play_arrow } />
            </div>
            </div>
       </>
    );
  }