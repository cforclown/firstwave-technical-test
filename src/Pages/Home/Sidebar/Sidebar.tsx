import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ProSidebar, SidebarHeader, Menu, IconShape,
} from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
import sidebarBanner from '../../../assets/images/sidebar-banner.png';
import sidebarCollapsedBanner from '../../../assets/images/sidebar-collapsed-banner.png';
import { ISidebarItem } from '../../../Types';
import sections from './SidebarItems';
import SidebarItemContainer from './SidebarItemContainer.style';
import { ITheme } from '../../../Themes/Themes';
import { IAppState } from '../../../Store';

import 'react-pro-sidebar/dist/css/styles.css';

export interface ISidebar {
  hidden: boolean;
  collapsed: boolean;
  className?: string;
}
function SidebarBase({ hidden, collapsed, className }: ISidebar): JSX.Element {
  const theme = useSelector<IAppState>((state) => state.layout.theme) as ITheme;
  const sidebarItemIconShape = useSelector<IAppState>((state) => state.layout.sidebarIconShape) as IconShape;

  const ismounted = useRef(false);
  const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    ismounted.current = true;
    return () => {
      ismounted.current = false;
    };
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (hidden) hide();
    else show();
  }, [hidden]);

  const hide = (): void => {
    ref.current?.classList.add('cl-home-sidebar-hidden');
  };
  const show = ():void => {
    ref.current?.classList.remove('cl-home-sidebar-hidden');
  };

  // const isItemActive = (itemPathname: string): boolean => location.pathname === itemPathname;
  const handleItemOnClick = (item: ISidebarItem): void => {
    if (!item.path) { return; }
    navigate(item.path);
  };

  const sidebarSections = sections.map((section, index) => (
    <SidebarItemContainer key={index} {...section} onClick={handleItemOnClick} />
  ));

  return (
    <div className={className}>
      <div id="cl-sidebar" ref={ref}>
        <ProSidebar width="240px" collapsed={collapsed} image={theme.sidebar.img}>
          <SidebarHeader>
            <div className="text-center py-2">
              <img
                src={collapsed ? sidebarCollapsedBanner : sidebarBanner}
                style={collapsed ? { width: '36px', height: '40px' } : { width: '80px', height: '40px' }}
                alt={sidebarCollapsedBanner}
              />
            </div>
          </SidebarHeader>
          <Menu iconShape={sidebarItemIconShape ?? 'round'}>
            {sidebarSections}
          </Menu>
        </ProSidebar>
      </div>
    </div>
  );
}

export default SidebarBase;
