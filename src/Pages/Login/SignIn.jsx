import React,{useMemo, useState} from 'react';
import CustomForm from '../../Components/Common/CustomForm';
import { connect } from 'react-redux';
import { CustomizablePostRequest } from '../../Redux/Actions/postActions';
import CustomInput from '../../Components/Common/CustomInput';
import CustomCheckbox from '../../Components/Common/CustomCheckbox';
import SectionOne from '../Common/sectionOne';
import { Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { BiSolidLockOpenAlt } from 'react-icons/bi';
import CustomButton from '../../Components/Common/CustomButton';


function SignIn({userData, CustomizablePostRequest}) {
  
  const authMemo= useMemo(() => userData, [userData]);

  console.log(authMemo)
  
  const formFields = [
    {
      name: 'username',
      rules: [{ required: true, message: 'Please enter your username' }],
      component: <CustomInput size='large' prefix={<UserOutlined/>} 
      placeholder="username" 
      autoComplete="username"
      className=" font-quicksand w-[400px]"/>
    },
    {
      name: 'password',
      rules: [{ required: true, message: 'Please enter your password' }],
      component: 
        <Input.Password
        prefix={<BiSolidLockOpenAlt/>}
        size='large' 
        placeholder="input password"
        className=" font-quicksand w-[400px]"
        autoComplete="current-password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />  
    },
    {
      component: <CustomCheckbox className="font-quicksand p-1 text-white" label="Keep me logged in" />
    }
  ];

  const handleSubmit = (values) => {
    const postOptions = {
        method: 'post',
        url: 'api_endpoint',
        data: {
          values
        },
        headers: {
          'Authorization': 'Bearer AccessToken',
          'Content-Type': 'application/json',
        },
      };
    console.log('Form values:', values);
    
    CustomizablePostRequest(postOptions);
  };

  return (
    <div className="grid grid-cols-2 w-full h-screen items-center justify-center">
      <section className='flex flex-cols col-span-1 items-center justify-center w-full h-full'>
        <SectionOne/>
      </section>
      <section className=" flex flex-col col-span-1 m-[10px] items-center justify-center bg-[#4c6ec0]  w-full h-full ">
        <div className="font-poppins font-semibold sm:text md:text-[30px] text-white">
          Welcome Back!
        </div>
        <div className=' font-poppins p-1 sm:text-[12px] md:text-[15px] text-white mb-[60px] font-extralight'>
          Don't have an account yet? <span className='underline font-extralight'><a href="/register">   Sign Up</a></span>
        </div>
        <CustomForm label="Login" className="sm:text-[40px] md:text-[60px]" formFields={formFields} onSubmit={handleSubmit} initialValues={{ }} />
        {/* <Form><Form.Item><CustomButton label="Login" size='large' htmlType="Submit" className="text-white bg-grey w-[400px] p-[20px]"/></Form.Item></Form> */}
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    CustomizablePostRequest: (data) => dispatch(CustomizablePostRequest(data)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

