import styled from 'styled-components';
import { WINDOW_SM_THRESHOLD } from '../../Constant/Common';

import HomeBase from './Home';
import { SIDEBAR_SHOW_CLASSNAME } from './Sidebar/Sidebar.style';

const Home = styled(HomeBase)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  height: 100vh;
  overflow: hidden;

  background-color: #ffffff;

  .cl-home-left-panel {
    display: flex;
    flex-direction: row;
    height: 100vh;

    @media screen and (max-width: ${WINDOW_SM_THRESHOLD}px) {
      position: fixed;
      left: 0;
      top: 0;
      width: calc(100% + 270px);
      margin-left: -270px;
    }

    .cl-sidebar-overlay {
      flex-grow: 0;
    }
  }
  .cl-home-left-panel.${SIDEBAR_SHOW_CLASSNAME} {
    @media screen and (max-width: ${WINDOW_SM_THRESHOLD}px) {
      margin-left: 0px;
      z-index: 100;
    }
    .cl-sidebar-overlay {
      display: flex;
      flex-grow: 10;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .cl-home-right-panel {
    position: relative;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
  }
`;

Home.displayName = 'Home';

export default Home;
