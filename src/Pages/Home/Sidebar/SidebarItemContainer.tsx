import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItem, SubMenu } from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
import { IAppState } from '../../../Store';
import { ISidebarItem } from '../../../Types';

interface ISidebarItemProps {
  label: string;
  icon: IconProp;
  active?: boolean;
  onClick: ()=>void
}
function SidebarItem({
  label, icon, active, onClick,
}: ISidebarItemProps): JSX.Element {
  return (
    <MenuItem
      onClick={onClick || null}
      active={active}
      icon={<FontAwesomeIcon icon={icon} />}
      popperarrow
    >
      {label}
    </MenuItem>
  );
}

export interface ISidebarItemContainer extends ISidebarItem {
  // active?: boolean;
  onClick: (item: ISidebarItem) => void;
}
export const SidebarItemContainerBase = ({ onClick, ...props }: ISidebarItemContainer): JSX.Element => {
  const isSidebarCollapsed = useSelector<IAppState>((state) => state.layout.sidebar.collapsed) as boolean;
  const { label, icon } = props;
  let { items } = props;
  if (isSidebarCollapsed && !items) {
    items = [
      { ...props },
    ];
  }

  if (!items) {
    return (
      <SidebarItem
        {...props}
        // active={isItemActive(item.pathname)}
        onClick={() => onClick(props)}
      />
    );
  }

  return (
    <SubMenu {...props} title={label} icon={<FontAwesomeIcon icon={icon} />}>
      {isSidebarCollapsed && (
        <div className="cl-sidebar-section-label text-center">
          {label}
        </div>
      )}
      {items.map((item, subIndex) => (
        <SidebarItem
          key={subIndex}
          label={item.label}
          icon={item.icon}
          // active={isItemActive(item.pathname)}
          onClick={() => onClick(item)}
        />
      ))}
    </SubMenu>
  );
};
