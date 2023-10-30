import React from "react";
import CustomInput from "../../Components/Common/CustomInput";
import CustomForm from "../../Components/Common/CustomForm";
import { connect } from "react-redux";
import { CustomizablePostRequest } from "../../Redux/Actions/postActions";
import { useMemo } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from "@ant-design/icons";
import SectionOne from "../Common/sectionOne";
import { BiSolidLockOpenAlt } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { API_BASE_URL } from "../../Config/URLs/Endpoint";

function RegistrationForm({ isRegistered, CustomizablePostRequest }) {
  const RegisterMemo = useMemo(() => isRegistered, [isRegistered]);
  console.log(RegisterMemo);
  

  const formFields = [
    {
      name: "username",
      rules: [
        { required: true, message: "Please enter a username" },
        { min: 3, message: "Username must be at least 3 characters" },
      ],
      component: (
        <CustomInput
          prefix={<UserOutlined />}
          placeholder="Username"
          className=""
          type="text"
        />
      ),
    },
    {
      name: "email",
      rules: [
        { required: true, message: "Please enter a valid email" },
        {
          type: "email",
          message: "Please enter a valid email address",
        },
      ],
      component: (
        <CustomInput
          prefix={<HiOutlineMail />}
          placeholder="E-mail"
          className=""
          type="email"
        />
      ),
    },
    {
      name: "password",
      rules: [
        { required: true, message: "Please enter a password" },
        { min: 6, message: "Password must be at least 6 characters" },
      ],
      component: (
        <Input.Password
          prefix={<BiSolidLockOpenAlt />}
          placeholder="Password"
          className="md:w-[400px]"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      ),
    },
    // {
    //   name: "confirmpassword",
    //   rules: [
    //     { required: true, message: "Please confirm your password" },
    //     // {
    //     //   validator: (rule, name, callback) => {
    //     //     if (name && name !== form.getFieldName("password")) {
    //     //       callback("Passwords do not match");
    //     //     } else {
    //     //       callback();
    //     //     }
    //     //   },
    //     // },
    //   ],
    //   component: (
    //     <Input.Password
    //       placeholder="Confirm Password"
    //       prefix={<BiSolidLockOpenAlt />}
    //       className="md:w-[400px]"
    //       iconRender={(visible) =>
    //         visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
    //       }
    //     />
    //   ),
    // }    
  ];


  const handleSubmit = (values) => {
    // e.preventDefault();
    // form.validateFields((err, values) => {
      // if (!err) {
        const postOptions = {
          method: "post",
          url: `${API_BASE_URL}/auth/register`,
          data: values, 
          headers: {
            "Content-Type": "application/json",
            Authorization: "",
          },
        };
        window.location.replace('/home');
        CustomizablePostRequest(postOptions);
        console.log("values", values);
      }
    // });


  return (
    <div className="grid grid-cols-2 w-full h-screen items-center justify-center">
      <section className="flex flex-cols col-span-1 items-center justify-center w-full h-full">
        <SectionOne />
      </section>
      <section className=" flex flex-col col-span-1 m-[10px] items-center justify-center bg-babyBlue  w-full h-full ">
        <div className="font-poppins font-semibold sm:text md:text-[30px] text-navyBlue ">
          Sign Up
        </div>
        <div className="font-poppins p-1 sm:text-[12px] md:text-[15px] text-navyBlue mb-[60px] font-extralight">
          Sign up and start your journey today!
        </div>
        <CustomForm
          label="Register"
          formFields={formFields}
          onSubmit={handleSubmit}
          initialValues={{}}
        />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
