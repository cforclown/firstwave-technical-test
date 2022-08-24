import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ILayoutStateSidebarStatus } from '../../Reducers/Layout/Layout';
import Sidebar, { SIDEBAR_SHOW_CLASSNAME } from './Sidebar/Sidebar.style';
import Header from './Header/Header.style';
import Content from './Content/Content.style';
// import Footer from './footer';
import { IAppState } from '../../Store';
import {
  ShowSidebar, HideSidebar, CollapseSidebar, UncollapseSidebar,
} from '../../Reducers/Layout/LayoutActions';

interface IHome {
  className?:string
}

export const WINDOW_SM_THRESHOLD = 576;

function HomeBase({ className }: IHome): JSX.Element {
  const ismounted = useRef(false);
  const sidebarWrapperRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const sidebarStatus = useSelector<IAppState>((state) => state.layout.sidebar) as ILayoutStateSidebarStatus;
  const [currentWindowWidth, setCurrentWindowWidth] = useState(-1);

  useEffect(() => {
    ismounted.current = true;

    window.addEventListener('resize', onresize);
    onresize();

    // UNMOUNT
    return () => {
      window.removeEventListener('resize', onresize);
      ismounted.current = false;
    };
  }, []);

  const onresize = (): void => {
    const currentWidth = window.innerWidth;
    if (currentWidth <= WINDOW_SM_THRESHOLD) {
      hideSidebar();
    } else {
      showSidebar(false);
    }
    setCurrentWindowWidth(currentWidth);
  };

  const onToggleSidebar = (): void => {
    if (currentWindowWidth > WINDOW_SM_THRESHOLD) {
      if (!sidebarStatus.collapsed) {
        collapseSidebar();
      } else {
        unCollapseSidebar();
      }
    } else if (!sidebarStatus.hidden) {
      hideSidebar();
    } else {
      showSidebar();
    }
  };

  const collapseSidebar = (): void => {
    dispatch(CollapseSidebar());
  };

  const unCollapseSidebar = (): void => {
    dispatch(UncollapseSidebar());
  };

  const showSidebar = (uncollapseSidebar = true): void => {
    sidebarWrapperRef.current?.classList.add(SIDEBAR_SHOW_CLASSNAME);
    dispatch(ShowSidebar(uncollapseSidebar));
  };

  const hideSidebar = (): void => {
    sidebarWrapperRef.current?.classList.remove(SIDEBAR_SHOW_CLASSNAME);
    dispatch(HideSidebar());
  };

  return (
    <div className={className}>
      <div className="cl-home-left-panel" ref={sidebarWrapperRef}>
        <Sidebar hidden={sidebarStatus.hidden} collapsed={sidebarStatus.collapsed} />
        <div className="cl-sidebar-overlay" onClick={hideSidebar} />
      </div>

      <div className="cl-home-right-panel">
        <Header showSidebarToggler={!!sidebarStatus.hidden} onToggleSidebar={onToggleSidebar} />
        {/* <Content /> */}
      </div>
    </div>
  );
}

export default HomeBase;
