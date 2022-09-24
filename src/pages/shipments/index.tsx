import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';
import Button, { BackBtn } from '../../components/Button';
import Input, { SelectInput } from '../../components/Input';
import Layout from '../../components/Layout';
import Wrapper from './style';
import Table from '../../components/Table';
import moment from 'moment';

type Props = {};

const Shipments = (props: Props) => {
  const navigate = useNavigate();
  // const { customerId } = useParams();
  const [data, setData] = useState<any>([]);
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://demo3522726.mockable.io/get_single_customer/123456789`
      );
      setUserInfo(res.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://demo3522726.mockable.io/get_single_customer_shipments/123456789`
      );
      setData(res.data);
    })();
  }, []);

  return (
    <Layout title='Shipments'>
      <Wrapper>
        <div className='back'>
          <BackBtn />
        </div>
        <div className='card-cont'>
          <div className='card'>
            <div className='img' />
            <div className='det'>
              <div className='name'>{`${userInfo?.first_name} ${userInfo?.last_name}`}</div>
              <div className='email'>{userInfo?.email}</div>
              <div className='email'>{userInfo?.phone}</div>
            </div>
            <Button className='btn'>Edit</Button>
          </div>
        </div>
        <Table
          title={() => (
            <div className='table-head'>
              <div>
                <Button className='head-btn'>Add New Shipment +</Button>
              </div>
              <div className='select-btn'>
                <SelectInput placeholder='Shipment Type' />
              </div>
              <div className='select-btn'>
                <SelectInput placeholder='Shipment Date' />
              </div>
              <div className='input'>
                <Input
                  leftIcon={
                    <AiOutlineSearch
                      size={20}
                      className='searchIcon'
                      color='#6B7280'
                    />
                  }
                  placeholder='Search by shipment ID, Destination'
                />
              </div>
            </div>
          )}
          data={data}
          columns={[
            {
              title: 'SHIPMENT TYPE',
              dataIndex: 'shipping_type',
              key: 'type',
            },
            {
              title: 'ORIGIN',
              dataIndex: 'origin_port_country',
              key: 'origin',
            },
            {
              title: 'DESTINATION',
              dataIndex: 'destination_port_country',
              key: 'destination',
            },
            {
              title: 'SHIPMENT DATE',
              dataIndex: 'shipment_pickup_date',
              key: 'date',
              render: (shipment_pickup_date: any) =>
                moment(shipment_pickup_date).format('MMM DD, YYYY'),
            },
            {
              title: 'SHIPING ID',
              dataIndex: '_id',
              key: 'id',
            },
            {
              dataIndex: '_id',
              key: 'id',
              render: (_id: any) => (
                <Button onClick={() => navigate(`/shipments_details/${_id}`)}>
                  View Detail
                </Button>
              ),
            },
          ]}
        />
      </Wrapper>
    </Layout>
  );
};

export default Shipments;
