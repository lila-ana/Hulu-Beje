/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Table } from "antd";
import { getUserAccount } from "../../Store/Accounts/accountsActions";
import { connect } from "react-redux";

function UserAccount({account_loading, accounts, getUserAccount}) {
    
    
    useEffect(() => {
      getUserAccount()
    }, []);
  
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
      }
    ];
  
    const datas = accounts ? accounts?.map((item, index) => ({
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
const mapStateToProps = (state) => {
  return {
    account_loading: state.accountReducer.account_loading,
    accounts: state.accountReducer.accounts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAccount: () => dispatch(getUserAccount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);