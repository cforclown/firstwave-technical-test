import styled from 'styled-components';

import SidebarBase from './Sidebar';

export const SIDEBAR_SHOW_CLASSNAME = 'cl-home-sidebar-wrapper-show';

const Sidebar = styled(SidebarBase)`
  #cl-sidebar {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    height: 100vh;
    overflow: hidden;

    background-color: #ddddff;
    box-shadow: 1px 3px 6px ${(props) => props.theme.sidebar.background}40;

    // react-pro-sidebar --------------------------------------------------------------------------------------------
    .pro-sidebar { 
      color: ${(props) => props.theme.sidebar.color};
    }

    .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout .pro-sidebar-header img {
      height: 40px;
    }

    .pro-sidebar-inner {
      background-color: ${(props) => props.theme.sidebar.background};
    }
    .pro-inner-item {
      padding: 8px 30px 8px 18px;
    }
    .pro-icon-wrapper {
      width: 40px;
      min-width: 40px;
      height: 40px;
      line-height: 40px;
      background-color: ${(props) => props.theme.sidebar.iconWrapper};
    }
    .pro-icon-wrapper .pro-icon > svg {
      height: 1.4em
    }

    // submenu -------------------------------------------------------------------------------------------------
    .pro-sidebar.collapsed .pro-menu > ul > .pro-menu-item.pro-sub-menu > .pro-inner-list-item > .popper-inner {
      background-color: ${(props) => props.theme.sidebar.background};
      padding-left: 15px;
    }
    .pro-sidebar.collapsed .pro-menu > ul > .pro-menu-item.pro-sub-menu > .pro-inner-list-item > .popper-inner .pro-icon-wrapper {
      width: 38px;
      min-width: 38px;
      height: 38px;
      line-height: 38px;
      background-color: ${(props) => props.theme.sidebar.background};
    }
    .pro-sidebar.collapsed .pro-menu > ul > .pro-menu-item.pro-sub-menu > .pro-inner-list-item > .popper-inner .pro-icon-wrapper .pro-icon {
      animation: none;
    }
    .pro-sidebar.collapsed .pro-menu > ul > .pro-menu-item.pro-sub-menu > .pro-inner-list-item > .popper-inner .pro-icon-wrapper .pro-icon > svg {
      height: 1em;
    }
    // ---------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------

    .cl-sidebar-wrapper {
      display: flex;
      flex-direction: row;
      height: 100vh;

      @media screen and (max-width: 576px) {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;

        display: none;
      }

      .cl-sidebar-overlay {
        display: none;
      }
    }
    .cl-sidebar-wrapper.${SIDEBAR_SHOW_CLASSNAME} {
      @media screen and (max-width: 576px) {
        display: flex;
        flex-direction: row;
        z-index: 100;
      }
      .cl-sidebar-overlay {
        display: flex;
        flex-grow: 10;
        background-color: rgba($color: black, $alpha: 0.5);
      }
    }
    
    .cl-sidebar-section-label {
      padding-right: 20px;
      color: ${(props) => props.theme.header.background};
      font-size: 1rem;
      font-weight: bold;
      margin: 0.2rem 0;
    }
  }
`;

Sidebar.displayName = 'Sidebar';

export default Sidebar;
