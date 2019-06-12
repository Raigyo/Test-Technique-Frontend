import React from 'react';
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
      height: '30px'
    }
  });

  return (
    <Page>
      <Page.Header>
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
      </Page.Body>
    </Page>
  );
};
