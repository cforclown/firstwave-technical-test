import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sidebar, { SIDEBAR_SHOW_CLASSNAME } from './Sidebar/Sidebar.style';
import Header from './Header/Header.style';
import Content from './Content/Content.style';
// import Footer from './footer';
import {
  ShowSidebar, HideSidebar, CollapseSidebar, UncollapseSidebar,
} from '../../Reducers/Layout/LayoutActions';
import { selectSidebarState } from '../../Selectors/LayoutSelector';
import { selectResource } from '../../Selectors/DataSelector';
import Page404 from '../404/Page404.style';
import { WINDOW_SM_THRESHOLD } from '../../Constant/Common';

interface IHome {
  className?:string
}

function HomeBase({ className }: IHome): JSX.Element {
  const ismounted = useRef(false);
  const sidebarWrapperRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const sidebarState = useSelector(selectSidebarState());
  const [currentWindowWidth, setCurrentWindowWidth] = useState(-1);

  const resource = useSelector(selectResource());

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
      if (!sidebarState.collapsed) {
        collapseSidebar();
      } else {
        unCollapseSidebar();
      }
    } else if (!sidebarState.hidden) {
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

  if (!resource) {
    return <Page404 />;
  }

  return (
    <div className={className}>
      <div className="cl-home-left-panel" ref={sidebarWrapperRef}>
        <Sidebar hidden={sidebarState.hidden} collapsed={sidebarState.collapsed} resource={resource} />
        <div className="cl-sidebar-overlay" onClick={hideSidebar} />
      </div>

      <div className="cl-home-right-panel">
        <Header showSidebarToggler={!!sidebarState.hidden} onToggleSidebar={onToggleSidebar} />
        <Content resource={resource} />
      </div>
    </div>
  );
}

export default HomeBase;
