import React from "react";
import { connect, useSelector } from "react-redux";
import Layout from "../../Layout/Layout";
import { useMemo } from "react";
import CustomInput from "../../Components/Common/CustomInput";
import CustomForm from "../../Components/Common/CustomForm";
import DashboardHeader from "../../Layout/DashboardHeader";
import { CustomizablePostRequest } from '../../Redux/Actions/postActions';


function Category({categoryAdd, CustomizablePostRequest}) {
  
  const authMemo= useMemo(() => categoryAdd, [categoryAdd]);
  const { data, loading, error } = useSelector((state) => state.fetch);


 const formFields = [
  {
    name: "CategoryName",
    rules: [{required: true, message:"Please Product Category" }],
    component: <CustomInput placeholder="Product Category" className="" type="text"/>
  }
 ]
  const handleSubmit = () => {
    const postOptions = {
        method: 'post',
        url: 'api_endpoint',
        data: {
          // Define your post data here
        },
        headers: {
          'Authorization': 'Bearer AccessToken',
          'Content-Type': 'application/json',
        },
      };
    console.log('Form values:', postOptions);
    
    CustomizablePostRequest(postOptions);
  };

  return (
    <Layout>
      <div className= "grid grid-rows-5 grid-flow-col gap-[20px] rounded-[20px] bg-white w-full h-full"> 
        <div className="row-span-1 bg-babyBlue rounded-[20px]">
          <DashboardHeader/>
        </div>
        <div className="row-span-4 p-4 font-quicksand">
          <div className="font-quicksand py-4 sm:text-[14px] sm:text-18px] font-semibold ">Add Category</div>
          <CustomForm className=" font-quicksand p-5" formFields={formFields} onSubmit={handleSubmit} initialValues={{ }} />
        </div>
      </div>
    </Layout>

    );
};

const mapStateToProps = (state) => {
  return {
    categoryAdd: state.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    CustomizablePostRequest: (data) => dispatch(CustomizablePostRequest(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
