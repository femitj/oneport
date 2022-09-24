import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import Wrapper from './style';

type Props = {};

const Customers = (props: Props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        'https://demo3522726.mockable.io/get_customers'
      );
      setData(res.data);
    })();
  }, []);

  return (
    <Layout title='Customers'>
      <Wrapper>
        <Table
          title={() => (
            <div className='table-head'>
              <Button className='head-btn'>Add Customer +</Button>
            </div>
          )}
          data={data}
          columns={[
            {
              title: 'FIRST NAME',
              dataIndex: 'first_name',
              key: 'firstName',
            },
            {
              title: 'LAST NAME',
              dataIndex: 'last_name',
              key: 'lastName',
            },
            {
              title: 'EMAIL ADDRESS',
              dataIndex: 'email',
              key: 'email',
            },
            {
              title: 'PHONE NUMBER',
              dataIndex: 'phone',
              key: 'phone',
            },
            {
              title: 'LAST LOGIN',
              dataIndex: 'lastLogin',
              key: 'lastLogin',
            },
            {
              dataIndex: 'id',
              key: 'id',
              render: (id: any) => (
                <div className='d-flex '>
                  <Button
                    className='ml-10'
                    background='#fff'
                    borderWidth='1'
                    outline='#D1D5DB'
                    color='#000'
                    onClick={() => navigate(`/shipments/${id}`)}
                  >
                    Shipments
                  </Button>
                  <Button className='ml-10'>Edit</Button>
                </div>
              ),
            },
          ]}
        />
      </Wrapper>
    </Layout>
  );
};

export default Customers;
