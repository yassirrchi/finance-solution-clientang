export interface MenuOption {
    name: string;
    route: string;
    path: string;
    active:boolean
    subMenu:MenuOption[]
  }