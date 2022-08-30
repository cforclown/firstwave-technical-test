import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ProSidebar,
  SidebarHeader,
  Menu,
  IconShape,
  SubMenu,
  MenuItem,
} from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import sidebarBanner from '../../../Assets/images/sidebar-banner.png';
import sidebarCollapsedBanner from '../../../Assets/images/sidebar-collapsed-banner.png';
import { IAppState } from '../../../Store';
import { IResource } from '../../../Types/Metadata';
import { selectTheme } from '../../../Selectors/ThemeSelector';

import 'react-pro-sidebar/dist/css/styles.css';

export interface ISidebar {
  hidden: boolean;
  collapsed: boolean;
  resource: IResource;
  className?: string;
}

function SidebarBase({
  hidden, collapsed, resource, className,
}: ISidebar): JSX.Element {
  const theme = useSelector(selectTheme);
  const sidebarItemIconShape = useSelector<IAppState>((state) => state.layout.sidebarIconShape) as IconShape;

  const ismounted = useRef(false);
  const navigate = useNavigate();

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

  const hide = (): void => { ref.current?.classList.add('cl-home-sidebar-hidden'); };
  const show = ():void => { ref.current?.classList.remove('cl-home-sidebar-hidden'); };

  const { dashboards, views } = resource;
  const dashboardItems = dashboards.map((dashboard) => (
    <MenuItem
      key={dashboard._id}
      onClick={() => navigate(`${resource._id}/dashboard/${dashboard._id}`)}
      icon={<FontAwesomeIcon icon={faChartPie} />}
      popperarrow
    >
      {dashboard.label}
    </MenuItem>
  ));
  const dashboardLabel = collapsed && (
    <div className="cl-sidebar-section-label text-center">
      Dashboard
    </div>
  );
  const exploreItems = views.map((view) => (
    <MenuItem
      key={view._id}
      onClick={() => navigate(`${resource._id}/explore/${view._id}`)}
      icon={<FontAwesomeIcon icon={faWpexplorer} />}
      popperarrow
    >
      {view.label.plural}
    </MenuItem>
  ));
  const exploreLabel = collapsed && (
    <div className="cl-sidebar-section-label text-center">
      Explore
    </div>
  );

  return (
    <div className={className}>
      <div id="cl-sidebar" ref={ref}>
        <ProSidebar width="240px" collapsed={collapsed} image={theme.sidebar.img}>
          <SidebarHeader>
            <div className="text-center py-2">
              <img
                src={collapsed ? sidebarCollapsedBanner : sidebarBanner}
                style={{ width: collapsed ? '36px' : '80px' }}
                alt={sidebarCollapsedBanner}
              />
            </div>
          </SidebarHeader>
          <Menu iconShape={sidebarItemIconShape ?? 'round'}>
            <SubMenu title="Dashboard" icon={<FontAwesomeIcon icon={faChartPie} />}>
              {dashboardLabel}
              {dashboardItems}
            </SubMenu>
            <SubMenu title="Explore" icon={<FontAwesomeIcon icon={faWpexplorer} />}>
              {exploreLabel}
              {exploreItems}
            </SubMenu>
          </Menu>
        </ProSidebar>
      </div>
    </div>
  );
}

export default SidebarBase;
