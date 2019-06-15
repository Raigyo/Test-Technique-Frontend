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
    position: 'fixed!important',
    right: '0',
    top: '50%',
    width: '8em',
    marginTop: '-2.5em'
  });
  const layoutSlider = css({
    position: 'relative',
    width: '365px',
    height: '8px',
    borderRadius: '5px',
    background: '#d3d3d3',
    outline: 'none',
    opacity: '0.7'
  });

  // Hook: Similar to componentDidMount and componentDidUpdate, used to rerender toggle icons
  const [isSelected, setBtnIdRadio] = useState(0);
  const [btnId1Hover, setBtnIdOver1] = useState(false);
  const [btnId2Hover, setBtnIdOver2] = useState(false);

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
            <div className={btnArrowsFrameTop}><div className={btnArrows}><ButtonUP/></div></div>
            <div className={btnArrowsFrameBottom}><div className={btnArrows}><ButtonDown/></div></div>
          </div>
          <div className={blockOtherControls}>
            {btnId1Hover ? (<div className={btnControl} onMouseOut={() => setBtnIdOver1(false)}><ButtonStopHover/></div>) : (<div className={btnControl} onClick={() => console.log('!stop!')} onMouseOver={() => setBtnIdOver1(true)}><ButtonStop/></div>)}
            {btnId2Hover ? (<div className={btnControl, btnControlHome} onMouseOut={() => setBtnIdOver2(false)}><ButtonStartPositionHover/></div>) : (<div className={btnControl, btnControlHome} onClick={() => console.log('home')} onMouseOver={() => setBtnIdOver2(true)}><ButtonStartPosition/></div>)}
          </div>
        </div>
        <div className="blockSlider">
          <input className={layoutSlider} id="layoutSlider" type="range" min="0.001" max="50" value="0.001" />
        </div>
      </Page.Body>

        {/*<Page.Header>
          Z Axis
          <Page.LeftButton icon={<Home/>} to='/control'/>
        </Page.Header>
        <Page.Body className={styleBody}>
          <SelectedFast/><ButtonFast/>
          <SelectedNormal/><ButtonSlow/>
          <SelectedSlow/><ButtonNormal/>
          <ButtonUP/>
          <ButtonDown/>
          <ButtonStop/>
          <ButtonStopHover/>
          <ButtonStartPosition/>
          <ButtonStartPositionHover/>
        </Page.Body>*/}
    </Page>
  );
};
