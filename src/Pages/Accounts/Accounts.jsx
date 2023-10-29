import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import DashboardHeader from "../../Layout/DashboardHeader";
import { Popconfirm, Table } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAction } from '../../Redux/Actions/fetchActions';
import CustomButton from "../../Components/Common/CustomButton";

export default function Accounts() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.fetch);
  
  useEffect(() => {
    dispatch(fetchAction('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    }));
  }, [dispatch]);

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    // {
    //   title: 'Remark',
    //   dataIndex: 'remark',
    //   key: 'remark',
    // },
    {
      title: 'Remark',
      dataIndex: 'remark',
      key: 'remark',
      render: (text, record) => (
        <div>
          {text === 'Approve' ? (
            <Popconfirm
              title="Are you sure you want to revoke?"
              onConfirm={() => handleRemarkClick(record, 'Revoke')}
              okText="Revoke"
              cancelText="Cancel"
            >
              <CustomButton label="Revoke" type="danger"/>
            </Popconfirm>
          ) : (
            <Popconfirm
              title="Are you sure you want to approve?"
              onConfirm={() => handleRemarkClick(record, 'Approve')}
              okText="Approve"
              cancelText="Cancel"
            >
              <CustomButton label="Approve" type="primary"/>
            </Popconfirm>
          )}
        </div>
      ),
    }
  ];

  const datas = data ? data.map((item, index) => ({
    key: index, 
    username: item.username,
    email: item.email,
    phone: item.phone,
    remark: item.remark,
  })) : [];

  return (
    <Layout>
      <div className= "grid grid-rows-5 grid-flow-col gap-[20px] rounded-[20px] bg-white w-full h-full"> 
        <div className="row-span-1 bg-babyBlue rounded-[20px]">
            <DashboardHeader/>
            <div className="grid grid-cols-10 gap-4 p-3 ">
              <div className="grid items-center justify-center col-span-2 border-navyBlue border-[1px] rounded-[10px] font-quicksand ">
                Users
              </div>
              <div className="grid items-center justify-center col-span-2 border-navyBlue border-[1px] rounded-[10px] bg-navyBlue text-white font-quicksand">
                Supplier
              </div>
            </div>
        </div>
          <div className="row-span-4 p-3">
            <Table
              columns={columns}
              dataSource={datas}
              pagination={{ pageSize: 5 }} 

            />
          </div>
      </div>
    </Layout>
  );
}
