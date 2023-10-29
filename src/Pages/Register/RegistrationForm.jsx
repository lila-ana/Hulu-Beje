import React from "react";
import CustomInput from "../../Components/Common/CustomInput";
import CustomForm from "../../Components/Common/CustomForm";
import { connect } from "react-redux";
import { CustomizablePostRequest } from "../../Redux/Actions/postActions";
import { useMemo } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from "@ant-design/icons";
import SectionOne from "../Common/sectionOne";
import CustomButton from "../../Components/Common/CustomButton";
import { BiSolidLockOpenAlt } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

function RegistrationForm({isRegistered, CustomizablePostRequest}) {

    const RegisterMemo = useMemo(() => isRegistered, [isRegistered])
    console.log(RegisterMemo);

  const formFields = [
    {
        name: "username",
        rules: [{required: true, message:"Please Enter Username" }],
        component: <CustomInput prefix={<UserOutlined/>} placeholder="Username" className="" type="text"/>
    },
    {
        name: "email",
        rules: [{required: true, message:"Please Enter valid email" }],
        component: <CustomInput prefix={<HiOutlineMail/>} placeholder="E-mail" className="" type="email"/>
    },
    {
        name: "password",
        rules: [{required: true, message:"Too short!" }],
        component: 
          <Input.Password
            prefix={<BiSolidLockOpenAlt/>}
            size='large' 
            placeholder="Input Password"
            className="md:w-[400px]"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
    },
    {
        name: "confirmpassword",
        rules: [
          {required: true, message:"password doesn't match" },
          // {validator: validatePasswordMatch }
        ],
        component: 
        <Input.Password
          placeholder="Confirm Password"
          prefix={<BiSolidLockOpenAlt/>}
          className="md:w-[400px]"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
    }
  ]

  // function validatePasswordMatch(rules, value, callback, source) {
  //   if (value !== source.password) {
  //     callback("Passwords do not match");
  //   } else {
  //     callback();
  //   }
  // }

  const handleSubmit = (values) => {  
    // CustomForm.validateFields((errors, source) => {
    //   if (!errors) { 
        const postOptions = {
            method: 'post',
            url: 'api_endpoint',
            data: {
                
            },
            headers: {
                "Content-Type":"application/json",
                "Authorization":""
            }
        }
    CustomizablePostRequest(postOptions)
    console.log("values", values);
    
      }
    // });
    // };

  return (
    <div className="grid grid-cols-2 w-full h-screen items-center justify-center">
      <section className='flex flex-cols col-span-1 items-center justify-center w-full h-full'>
        <SectionOne/>
      </section>
      <section className=" flex flex-col col-span-1 m-[10px] items-center justify-center bg-[#4c6ec0]  w-full h-full ">
        <div className="font-poppins font-semibold sm:text md:text-[30px] text-white mb-[60px]">
          Sign Up 
        </div>
        <CustomForm label="Register" formFields={formFields} onSubmit={handleSubmit} initialValues={{ }} />
        {/* <div className="flex items-center justify-center w-[400px] ">
          <CustomButton label="Register" size='large' htmlType="Submit" className="text-white p-[20px] mx-[80px]"/>
          <CustomButton label="Cancel" size='large' htmlType="Submit" className="text-white p-[20px] mx-[80px]"/>
        </div> */}
      </section>
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
      isRegistered: state.register.data,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      CustomizablePostRequest: (data) => dispatch(CustomizablePostRequest(data)),
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);