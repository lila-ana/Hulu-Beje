import React,{useMemo, useState} from 'react';
import CustomForm from '../../Components/Common/CustomForm';
import CustomInput from '../../Components/Common/CustomInput';
import CustomCheckbox from '../../Components/Common/CustomCheckbox';
import SectionOne from '../Common/sectionOne';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { BiSolidLockOpenAlt } from 'react-icons/bi';
import { API_BASE_URL } from '../../Config/URLs/Endpoint';
import axios from 'axios';


export default function SignIn({ userData, CustomizablePostRequest}) {
  
  const authMemo= useMemo(() => userData, [userData]);
  const [loggedInUser, setLoggedInUser] = useState(null);


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
      component: <CustomCheckbox className="font-quicksand p-1 text-navyBlue" label="Keep me logged in" />
    }
  ];

  // const handleSubmit = (values) => {
  //   const postOptions = {
  //       method: 'post',
  //       url: `${API_BASE_URL}/auth/login`,
  //       data: {
  //         values
  //       },
  //       headers: {
  //         'Authorization': 'Bearer AccessToken',
  //         'Content-Type': 'application/json',
  //       },
  //     };
  //   console.log('Form values:', values);
    
  //   CustomizablePostRequest(postOptions);
  // };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, values, {
        headers: {
          'Authorization': 'Bearer AccessToken',
          'Content-Type': 'application/json',
        },
      });
      setLoggedInUser(response.data.user);
      window.location.replace('/home');
      localStorage.setItem("access_token", response.data?.access_token);

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
        {loggedInUser ? (
          <div>
            <p>Welcome, {loggedInUser.name}!</p>
          </div> ) : (
        <CustomForm label="Login" className="sm:text-[40px] md:text-[60px]" formFields={formFields} onSubmit={handleSubmit} initialValues={{ }} />
          )}
      </section>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     userData: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     CustomizablePostRequest: (data) => dispatch(CustomizablePostRequest(data)),
//   }
// };


// connect(mapStateToProps, mapDispatchToProps)(SignIn);

