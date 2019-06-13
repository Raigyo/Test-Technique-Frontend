import React from 'react';
import {css} from 'emotion';
import ZAxis from '../../assets/zAxis_svg';
import ZAxisHover from '../../assets/zAxisHover_svg';
import TankCleaner from '../../assets/tankCleaner_svg';
import TankCleanerHover from '../../assets/tankCleanerHover_svg';
import TestScreen from '../../assets/testScreen_svg';
import TestScreenHover from '../../assets/testScreenHover_svg';
import LevelPlate from '../../assets/levelingPlate_svg';
import LevelPlateHover from '../../assets/levelingPlateHover_svg';
import MenuButton from '../common/MenuButton';
import Page from '../common/Page';
import Home from '../../assets/previous_svg';

export default () => {
  const styleBody = css({
    display: 'grid',
    gridGap: '15px',
    gridTemplateColumns: 'repeat(auto-fit, 200px)',
    gridTemplateRows: 'repeat(auto-fit, 200px)',
    justifyContent: 'center',
    margin: 'auto 0',
    width: '100%'
  });

  const styleButton = css({
    border: 'none',
    borderRadius: '8px',
    height: '100%',
    margin: '0',
    minHeight: '200px',
    minWidth: '200px',
    padding: '8px',
    position: 'relative',
    width: '100%'
  });

  return (
    <Page>
      <Page.Header>
        Control
        <Page.LeftButton icon={<Home/>} to='/' onClick={() => console.log('Home')}/>
      </Page.Header>
      <Page.Body>
        <div className={styleBody}>
          <MenuButton
            icon={<ZAxis/>}
            iconHover={<ZAxisHover/>}
            className={styleButton}
            title='Move'
            to='/control/move'
          />

          <MenuButton
            icon={<TankCleaner/>}
            iconHover={<TankCleanerHover/>}
            className={styleButton}
            to='/control/clear'
            disabled
            title='Tank Cleaner'
          />

          <MenuButton
            icon={<TestScreen/>}
            iconHover={<TestScreenHover/>}
            className={styleButton}
            to='/control/screen'
            disabled
            title='Test Screen'
          />

          <MenuButton
            icon={<LevelPlate/>}
            iconHover={<LevelPlateHover/>}
            className={styleButton}
            to='/control/level'
            disabled
            title='Level Plate'
          />
        </div>
      </Page.Body>
    </Page>
  );
};
