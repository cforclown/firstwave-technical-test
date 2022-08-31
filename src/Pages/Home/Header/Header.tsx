import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { IUser } from '../../../Types';
import UserAvatar from '../../../Components/UserAvatar/UserAvatar.style';
// import { DeleteAccessToken } from '../../../Reducers/AccessToken/AccessTokenActions';
// import { IAppState } from '../../../Store';

interface ILayoutHeader {
  showSidebarToggler: boolean;
  onToggleSidebar: ()=>void;
  className?: string;
}

export const HeaderBase = ({ showSidebarToggler, onToggleSidebar, className }: ILayoutHeader): JSX.Element => {
  // const user = useSelector<IAppState>((state) => (state.accessToken.session?.user ?? null));
  const user: IUser = {
    _id: 'haha',
    username: 'haha',
    fullname: 'haha',
    role: {},
  };
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  function onToggleSidebarClick(): void {
    if (!onToggleSidebar) return;
    onToggleSidebar();
  }

  function accDropdownToggler({ children, onClick }: { children: React.ReactNode, onClick: (e: any)=>void }, ref: React.LegacyRef<HTMLDivElement> | undefined): JSX.Element {
    return (
      <div
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </div>
    );
  }

  async function onLogoutClick(): Promise<void> {
    // TODO api call LOGOUT
    navigate('/login');
  }

  return (
    <div className={className}>
      <div id="cl-header">
        <div className="cl-header-left">
          {showSidebarToggler && (
            <div className="cl-header-sidebar-toggle-btn" onClick={onToggleSidebarClick}>
              <FontAwesomeIcon icon={['fas', 'align-justify']} />
            </div>
          )}
        </div>
        <div className="cl-header-center" />
        <div className="cl-header-right">
          <Dropdown>
            {user && (
              <Dropdown.Toggle as={React.forwardRef(accDropdownToggler)} id="acc-dropdown">
                <UserAvatar userId={user._id} size="md" />
              </Dropdown.Toggle>
            )}

            <Dropdown.Menu>
              <Dropdown.Header>
                <div className="text-center">Account</div>
              </Dropdown.Header>

              <Dropdown.Divider />

              <Dropdown.Item>
                <AccountDropdownMenuItem icon={['fas', 'user-circle']} title="Profile" onClick={() => navigate('../../profile')} />
              </Dropdown.Item>
              <Dropdown.Item>
                <AccountDropdownMenuItem icon={['fas', 'cog']} title="Settings" onClick={() => navigate('/settings')} />
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item>
                <AccountDropdownMenuItem icon={['fas', 'sign-out-alt']} title="Logout" onClick={onLogoutClick} />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

interface IAccountDropdownMenuItem {
  icon: IconProp;
  title: string;
  onClick?: ()=>void;
}
function AccountDropdownMenuItem({ icon, title, onClick }: IAccountDropdownMenuItem): JSX.Element {
  return (
    <div className="d-flex flex-row justify-content-start align-items-center text-secondary" onClick={onClick}>
      <div className="me-3">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h6 style={{ marginBottom: '2px' }}>{title}</h6>
    </div>
  );
}

export default HeaderBase;
