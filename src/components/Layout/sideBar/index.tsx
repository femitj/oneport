import React from 'react';
import Wrapper from './style';
import Logo from '../../../assets/svgs/logo';
import Dashboard from '../../../assets/svgs/dashboard';
import User from '../../../assets/svgs/user';
import Users from '../../../assets/svgs/users';
import Shipment from '../../../assets/svgs/shipment';
import Map from '../../../assets/svgs/map';
import Page from '../../../assets/svgs/page';
import Quotes from '../../../assets/svgs/quotes';
import Invoice from '../../../assets/svgs/invoice';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  screen: string;
}

const SideBar = ({ screen }: Props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const siders = [
    {
      name: 'Dashboard',

      icon: <Dashboard />,
    },
    {
      name: 'Admin',
      icon: <User />,
    },
    {
      name: 'Customers',
      path: '/customers',
      icon: <Users color={pathname === '/customers' && '#fff'} />,
    },
    {
      name: 'Shipments',
      icon: <Shipment />,
    },
    {
      name: 'Tracking',

      icon: <Map />,
    },
    {
      name: 'Documents',

      icon: <Page />,
    },
    {
      name: 'Rates',

      icon: <Page />,
    },
    {
      name: 'Quotes',

      icon: <Quotes />,
    },
    {
      name: 'Invoices',

      icon: <Invoice />,
    },
  ];

  return (
    <Wrapper screen={screen}>
      <div className='logo-cont'>
        <div className='logo-img'>
          <Logo />
        </div>
      </div>
      <div className='sidebar-list'>
        {siders?.map((side: any) => (
          <div
            className='item'
            onClick={() => (side?.path ? navigate(side?.path) : {})}
          >
            <div
              className={`item-icon ${
                pathname === side?.path ? 'item-icon-active' : ''
              }`}
            >
              {side?.icon}
            </div>
            <div
              className={`${
                pathname === side?.path ? 'item-text-active' : 'item-text'
              }`}
            >
              {side?.name}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default SideBar;
