import React,{useEffect, useState} from 'react';
import CustomForm from '../../Components/Common/CustomForm';
import CustomInput from '../../Components/Common/CustomInput';
import CustomCheckbox from '../../Components/Common/CustomCheckbox';
import SectionOne from '../Common/sectionOne';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { BiSolidLockOpenAlt } from 'react-icons/bi';
import { connect } from 'react-redux';
import { login } from '../../Store/Login/loginActions';


const SignIn = ({ loggedInUser, login}) => {
  
  const [userList, setUserList] = useState(null);
  const [formValues, setFormValues] = useState({});

  
  const formFields = [
    {
      name: 'username',
      rules: [{ required: true, message: 'Please enter your username' }],
      component: 
        <CustomInput 
          size='large' 
          prefix={<UserOutlined/>} 
          placeholder="username" 
          autoComplete="username"
          className=" font-quicksand w-[400px]"
          value={formValues.username}
          onChange={(e) => setFormValues({ ...formValues, username: e.target.value })}
        /> 
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
        value={formValues.password}
        onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
      />  
    },
    {
      component: <CustomCheckbox className="font-quicksand p-1 text-navyBlue" label="Keep me logged in" />
    }
  ];
  // console.log("Form Fields", formValues);
  

  const value ={
    "username":  formValues.username,
    "password":  formValues.password
  }
  // console.log(value, "values");
  

  return (
    <div className="grid grid-cols-2 w-full h-screen items-center justify-center">
      <section className='flex flex-cols col-span-1 items-center justify-center w-full h-full'>
        <SectionOne/>
      </section>
      <section className=" flex flex-col col-span-1 m-[10px] items-center justify-center bg-babyBlue  w-full h-full ">
        <div className="font-poppins font-semibold sm:text md:text-[30px] text-navyBlue">
          Welcome Back!
        </div>
        <div className=' font-poppins p-1 sm:text-[12px] md:text-[15px] text-navyBlue mb-[60px] font-extralight'>
          Don't have an account yet? <span className='underline font-extralight'><a href="/register">   Sign Up</a></span>
        </div>
        {userList ? (
          <div>
            <p>Welcome, {userList.name}!</p>
          </div> ) : (
        <CustomForm label="Login" className="sm:text-[40px] md:text-[60px]" formFields={formFields} onSubmit={()=>login(value)} initialValues={{ }} />
          )}
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.loginReducer.users,


  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (value) => dispatch(login(value)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

