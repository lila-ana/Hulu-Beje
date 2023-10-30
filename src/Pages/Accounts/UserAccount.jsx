import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAction } from "../../Redux/Actions/fetchActions";
import { Popconfirm, Table } from "antd";
import CustomButton from "../../Components/Common/CustomButton";
import { API_BASE_URL } from "../../Config/URLs/Endpoint";

export default function UserAccount() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.fetch.data);
    
    useEffect(() => {
      dispatch(fetchAction(`${API_BASE_URL}/auth/users`, {
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
  
    const datas = data ? data?.map((item, index) => ({
      key: index, 
      username: item.username,
      email: item.email,
      phone: item.phone,
      remark: item.remark,
    })) : [];
  
    return (
        <div className="row-span-4 p-3">
            <Table
              columns={columns}
              dataSource={datas}
              pagination={{ pageSize: 5 }} 

            />
        </div>
    );
}
