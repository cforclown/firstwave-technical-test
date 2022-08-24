import { ISidebarItem } from '../../../Types';

const sidebarItems: ISidebarItem[] = [
  {
    label: 'Dashboard',
    icon: ['fas', 'chart-pie'],
    path: '/',
  },
  {
    label: 'Manage',
    icon: ['fas', 'database'],
    items: [
      {
        label: 'Users',
        path: '/master-data/users',
        icon: ['fas', 'users-cog'],
        permissions: {
          masterData: 'view',
        },
      },
      {
        label: 'Roles',
        path: '/master-data/roles',
        icon: ['fas', 'exclamation-circle'],
        permissions: {
          masterData: 'view',
        },
      },
    ],
  },
];

export default sidebarItems;
