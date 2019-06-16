import React, { useState }  from 'react';
import {css} from 'emotion';
import ButtonFast from '../../assets/ButtonFast_svg';
import ButtonNormal from '../../assets/ButtonNormal_svg';
import ButtonSlow from '../../assets/ButtonSlow_svg';
import ButtonStop from '../../assets/ButtonStop_svg';
import ButtonStopHover from '../../assets/ButtonStopHover_svg';
import ButtonStartPosition from '../../assets/ButtonStartingPosition_svg';
import ButtonStartPositionHover from '../../assets/ButtonStartingPositionHover_svg';
import ButtonUP from '../../assets/ButtonUP';
import ButtonDown from '../../assets/ButtonDown';
import SelectedFast from '../../assets/SelectedFast_svg';
import SelectedNormal from '../../assets/SelectedNormal_svg';
import SelectedSlow from '../../assets/SelectedSlow_svg';
import Page from '../common/Page';
import Home from '../../assets/previous_svg';

export default (props) => {

  //CSS and layout
  //main
  const styleBody = css({
    svg: {
      width: '100%',
      height: '100%'
    }
  });
  //Blocks with interactive buttons
  const blockCenter = css({
    display: 'flex',
  	margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px'
  });
  const blockSpeed = css({height: '120px'});
  const blockRotate = css({
    height: '120px',
    margin: '23px 15px 0 15px'
  });
  const blockOtherControls = css({
    height: '120px',
    position: 'relative'
  });
  //Control buttons
  const btnControl = css({
    width: '47px',
    height: '40px'
  });
  const btnControlHome = css({
    position: 'absolute',
    bottom: '0'
  });
  const btnArrows = css({
    width: '13px',
    margin: 'auto',
    display: 'inlineBlock',
    height: '100%',
    verticalAlign: 'middle'
  });
  const btnArrowsFrameTop = css({
    width: '112px',
    height: '47px',
    backgroundColor: '#445A64',
    borderRadius: '10% 10% 0 0',
    margin: '0 0 1px 0'
  });
  const btnArrowsFrameBottom = css({
    width: '112px',
    height: '47px',
    backgroundColor: '#445A64',
    borderRadius: '0 0 10% 10%'
  });
  //Slider
  const blockSlider = css({
    position: 'fixed',
  	bottom: '0',
  	left: '0',
  	right: '0',
  	textAlign: 'center',
    paddingBottom: '15%'
  });

  const textSlider = css({
    width: '80px',
    height: '20px',
    marginBottom: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '5px',
    backgroundColor: '#161E21',
    color: '#FFFFFF',
    ':after': {
      content:'',
      borderLeft:'20px solid transparent',
      borderRight:'20px solid transparent',
      borderTop: '20px solid #139ee0',
      position: 'absolute'
    },
  });

  const layoutSlider = css({
    //WebkitAppearance: 'none',
    width: '365px',
    height: '8px',
    borderRadius: '5px',
    background: '#d3d3d3'
  });

  //Hooks: Similar to componentDidMount and componentDidUpdate
  //used to rerender toggle icons
  const [isSelected, setBtnIdRadio] = useState(0);
  //used to rerender hover icons
  const [btnStopHover, setBtnIdOver1] = useState(false);
  const [btnHomeHover, setBtnIdOver2] = useState(false);
  //used to store slider value
  const [count, setCount] = useState(0.001);

  //Functions
  //display data (speed+slider value) when we click on arrows
  const displayData = (ev)  => {
      switch(isSelected) {
        case 1:
          return console.log("Speed: Fast / Slider value: " + count);
        case 2:
          return console.log("Speed: Normal / Slider value: " + count);
        case 3:
          return console.log("Speed: Slow / Slider value: " + count);
        default:
          return console.log("No speed selected / Slider value: " + count);
      }
    };
  //record slider value
  const onChange = (ev)  => {
      setCount(ev.target.value);
    };

  return (
    <Page>
      <Page.Header>
        Z Axis
        <Page.LeftButton icon={<Home/>} to='/control'/>
      </Page.Header>
      <Page.Body className={styleBody}>
          {/*Conditional Ternary Operator Rendering for toggle icons*/}
        <div className={blockCenter}>
          <div className={blockSpeed}>
            {isSelected==1 ? (<div className={btnControl}><SelectedFast/></div>) : (<div className={btnControl} onClick={() => setBtnIdRadio(1)}><ButtonFast/></div>)}
            {isSelected==2 ? (<div className={btnControl}><SelectedNormal/></div>) : (<div className={btnControl} onClick={() => setBtnIdRadio(2)}><ButtonNormal/></div>)}
            {isSelected==3 ? (<div className={btnControl}><SelectedSlow/></div>) : (<div className={btnControl} onClick={() => setBtnIdRadio(3)}><ButtonSlow/></div>)}
          </div>
          <div className={blockRotate}>
            <div className={btnArrowsFrameTop} onClick={displayData}><div className={btnArrows}><ButtonUP/></div></div>
            <div className={btnArrowsFrameBottom} onClick={displayData}><div className={btnArrows}><ButtonDown/></div></div>
          </div>
          <div className={blockOtherControls}>
            {btnStopHover ? (<div className={btnControl}  onClick={() => console.log('!stop!')} onMouseLeave={() => setBtnIdOver1(false)} defaultValue="Stop"><ButtonStopHover/></div>) : (<div className={btnControl} onMouseOver={() => setBtnIdOver1(true)}  defaultValue="Stop"><ButtonStop/></div>)}
            {btnHomeHover ? (<div className={btnControl, btnControlHome} onClick={() => console.log('home')} onMouseLeave={() => setBtnIdOver2(false)} defaultValue="Home"><ButtonStartPositionHover/></div>) : (<div className={btnControl, btnControlHome} onMouseOver={() => setBtnIdOver2(true)} defaultValue="Home"><ButtonStartPosition/></div>)}
          </div>
        </div>
        <div className={blockSlider}>
          <div className={textSlider}>{count}</div>
          <input className={layoutSlider} onChange={onChange} type="range" min="0.001" defaultValue="0.001" max="50" step="0.001"/>
        </div>
      </Page.Body>
    </Page>
  );
};
