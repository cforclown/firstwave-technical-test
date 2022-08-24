import styled from 'styled-components';

import { SidebarItemContainerBase } from './SidebarItemContainer';

export const SIDEBAR_SHOW_CLASSNAME = 'cl-home-sidebar-wrapper-show';

const SidebarItemContainer = styled(SidebarItemContainerBase)`
  .cl-sidebar-section-label {
    padding-right: 20px;
    color: #f53b57;
    font-size: 1rem;
    font-weight: bold;
    margin: 0.2rem 0;
  }
`;

SidebarItemContainer.displayName = 'SidebarItemContainer';

export default SidebarItemContainer;
