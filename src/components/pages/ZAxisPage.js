import React, { useState, useEffect }  from 'react';
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
    display: 'grid!important',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: '0.8fr 1.2fr 1fr',
    gridTemplateAreas: "'layout1 layout1 layout1 layout1 layout1' 'empty-left speed controls rotation empty-right' 'slider slider slider slider slider'",
    border: '1px solid',
    svg: {
      height: '30px'
    }
  });
  const emptyLeft  = css({gridArea: 'empty-left'});
  const layout1 = css({gridArea: 'layout1'});
  const speed  = css({gridArea: 'speed'});
  const controls = css({gridArea: 'controls'});
  const rotation = css({gridArea: 'rotation'});
  const emptyRight = css({gridArea: 'empty-right'});
  const slider = css({gridArea: 'slider'});

  /*let isSelectedOne = false;
  let isSelectedTwo = false;
  let isSelectedThree = false;*/



  //const [isSelected, setBtnID] = useState();

  // Hook: Similar to componentDidMount and componentDidUpdate:
  const [isSelected, setBtnID] = useState(0);

  /*function setBtnID(isSelected) {
    return isSelected;
  };*/

  return (
    <Page>
    <Page.Header>
      Z Axis
      <Page.LeftButton icon={<Home/>} to='/control'/>
    </Page.Header>
    <Page.Body className={styleBody}>
        <div className={emptyLeft}>empty-left</div>
        <div className={layout1}>layout1</div>
        <div className={speed}>
          {isSelected==1 ? (<div><SelectedFast/></div>) : (<div onClick={() => setBtnID(1)}><ButtonFast/></div>)}
          {isSelected==2  ? (<div><SelectedNormal/></div>) : (<div onClick={() => setBtnID(2)}><ButtonNormal/></div>)}
          {isSelected==3  ? (<div><SelectedSlow/></div>) : (<div onClick={() => setBtnID(3)}><ButtonSlow/></div>)}
        </div>
        <div className={controls}><ButtonUP/><ButtonDown/></div>
        <div className={rotation}><ButtonStopHover/><ButtonStartPosition/></div>
        <div className={emptyRight}>empty-right</div>
        <div className={slider}>slider</div>
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
