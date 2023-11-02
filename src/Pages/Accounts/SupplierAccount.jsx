/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Table } from "antd";
import { getSupplierAccount} from "../../Store/Accounts/accountsActions";
import { connect } from "react-redux";

function SupplierAccount({account_loading, accounts, getSupplierAccount}) {

  useEffect(() => {
      getSupplierAccount()
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

    console.log("Accounts",accounts);
    
    const datas = accounts ? accounts?.map((item, index) => ({
      key: index, 
      username: item.username,
      email: item.email,
      phone: item.phone,
      remark: item.remark,
    })) : [];

    console.log(accounts, "accounts");

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
    accounts:state.accountReducer.accounts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSupplierAccount: () => dispatch(getSupplierAccount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SupplierAccount);