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
  const blockCenter = css({
    display: 'flex',
  	margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px'
  });
  const blockSpeed = css({height: '120px'});
  const blockRotate = css({height: '120px'});
  const blockOtherControls = css({height: '120px'});
  const btnControlSpeed = css({width: '47px', height: '40px'});
  const btnArrows = css({width: '13px'});
  const btnArrowsFrameTop = css({width: '112px', height: '47px', backgroundColor: '#445A64', borderRadius: '10% 10% 0 0', padding: '10px 0 0 0'});
  const btnArrowsFrameBottom = css({width: '112px', height: '47px', backgroundColor: '#445A64', borderRadius: '0 0 10% 10%', padding: '0 0 1px 0'});
  // Hook: Similar to componentDidMount and componentDidUpdate, used to rerender toggle icons
  const [isSelected, setBtnIdRadio] = useState(0);
  const [btnId, setBtnIdOver] = useState(0);


  return (
    <Page>
    <Page.Header>
      Z Axis
      <Page.LeftButton icon={<Home/>} to='/control'/>
    </Page.Header>
    <Page.Body className={styleBody}>
        {/*Conditional Ternary Operator Rendering*/}
      <div className={blockCenter}>
        <div className={blockSpeed}>
          {isSelected==1 ? (<div className={btnControlSpeed}><SelectedFast/></div>) : (<div className={btnControlSpeed} onClick={() => setBtnIdRadio(1)}><ButtonFast/></div>)}
          {isSelected==2 ? (<div className={btnControlSpeed}><SelectedNormal/></div>) : (<div className={btnControlSpeed} onClick={() => setBtnIdRadio(2)}><ButtonNormal/></div>)}
          {isSelected==3 ? (<div className={btnControlSpeed}><SelectedSlow/></div>) : (<div className={btnControlSpeed} onClick={() => setBtnIdRadio(3)}><ButtonSlow/></div>)}
        </div>
        <div className={blockRotate}>
          <div className={btnArrowsFrameTop}><div className={btnArrows}><ButtonUP/></div></div>
          <div className={btnArrowsFrameBottom}><div className={btnArrows}><ButtonDown/></div></div>
        </div>
        <div className={blockOtherControls}>
          {btnId ? (<div className={btnControlSpeed} onMouseOut={() => setBtnIdOver(1)}><ButtonStopHover/></div>) : (<div className={btnControlSpeed} onClick={() => console.log('!stop!')} onMouseOver={() => setBtnIdOver(1)}><ButtonStop/></div>)}
          {btnId ? (<div className={btnControlSpeed} onMouseOut={() => setBtnIdOver(2)}><ButtonStartPositionHover/></div>) : (<div className={btnControlSpeed} onClick={() => console.log('home')} onMouseOver={() => setBtnIdOver(2)}><ButtonStartPosition/></div>)}
        </div>
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
