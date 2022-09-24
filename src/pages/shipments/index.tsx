import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';
import Button, { BackBtn } from '../../components/Button';
import Input, { SelectInput } from '../../components/Input';
import Layout from '../../components/Layout';
import Wrapper from './style';
import Table from '../../components/Table';

type Props = {};

const Shipments = (props: Props) => {
  const navigate = useNavigate();
  const { customerId } = useParams();
  const [data, setData] = useState([]);

  // const data = [
  //   {
  //     type: 'Export',
  //     origin: 'NGAPP',
  //     location: 'Lagos, Nigeria',
  //     destination: 'Arlington',
  //     destinationLocation: 'VA, USA',
  //     date: 'Apr 02, 2022',
  //     id: '588393926',
  //   },
  //   {
  //     type: 'Import',
  //     origin: 'Arlington',
  //     location: 'VA, USA',
  //     destination: 'NGAPP',
  //     destinationLocation: 'Lagos, Nigeria',
  //     date: 'Apr 02, 2022',
  //     id: '489395758',
  //   },
  // ];

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://demo3522726.mockable.io/get_single_customer/${customerId}`
      );
      console.log(res.data);
    })();
  }, [customerId]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://demo3522726.mockable.io/get_single_customer_shipments/${customerId}`
      );
      setData(res.data);
    })();
  }, [customerId]);

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
              <div className='name'>Albert Flores</div>
              <div className='email'>deanna.curtis@example.com</div>
              <div className='email'>07037656543</div>
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
              dataIndex: 'type',
              key: 'type',
            },
            {
              title: 'ORIGIN',
              dataIndex: 'origin',
              key: 'origin',
            },
            {
              title: 'DESTINATION',
              dataIndex: 'destination',
              key: 'destination',
            },
            {
              title: 'SHIPMENT DATE',
              dataIndex: 'date',
              key: 'date',
            },
            {
              title: 'SHIPING ID',
              dataIndex: 'id',
              key: 'id',
            },
            {
              dataIndex: 'id',
              key: 'id',
              render: (id: any) => (
                <Button onClick={() => navigate(`${id}`)}>View Detail</Button>
              ),
            },
          ]}
        />
      </Wrapper>
    </Layout>
  );
};

export default Shipments;
