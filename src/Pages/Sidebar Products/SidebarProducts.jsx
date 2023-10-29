import React, { useEffect, useMemo } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { GrView } from "react-icons/gr";
import DashboardHeader from "../../Layout/DashboardHeader";
import CustomButton from "../../Components/Common/CustomButton";
import Layout from "../../Layout/Layout";
import CustomForm from "../../Components/Common/CustomForm";
import CustomInput from "../../Components/Common/CustomInput";
import { connect, useDispatch, useSelector } from "react-redux";
import { CustomizablePostRequest } from '../../Redux/Actions/postActions';
import { Select } from "antd";
import { setOptions } from "../../Redux/Actions/selectDropdownActions";
import { fetchAction } from "../../Redux/Actions/fetchActions";


function SidebarProducts({addProduct, CustomizablePostRequest, options, selectedValue, setSelectedValue}) {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.fetch);

  const AddProductMemo = useMemo (() => addProduct, [addProduct])
  
  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  const formFields = [
    {
      name: "ProductName",
      rules: [{required: true, message:"Please Enter valid email" }],
      component: <CustomInput placeholder="Product Name" className="" type="text"/>
    },
    {
      name: "ProductDescription",
      rules: [{required: true, message:"Please Enter valid email" }],
      component: <CustomInput placeholder="Product Description" className="" type="textarea"/>
    },
    {
      name: "ProductCategory",
      rules: [{required: false, message:"Please Enter valid email" }],
      component: <Select 
                    value={selectedValue}
                    placeholder="Product Category"
                    className="" 
                    onChange={handleSelectChange}
                  >
                    {options.map((option) => (
                      <Option key={option.value} value={option.value}>
                        {option.label}
                      </Option>
                    ))}
                  </Select>
    },
    {
      name: "ProductQuantity",
      rules: [{required: true, message:"Please Enter valid email" }],
      component: <CustomInput placeholder="Product Quantity" className="" type="number"/>
    },
    {
      name: "ProductImage",
      rules: [{required: true, message:"Please Enter valid email" }],
      component: <CustomInput placeholder="Product Image" className="" type="file"/>
    },
  ]
  const handleSubmit = () => {  
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
  }

  useEffect(() => {
    dispatch(fetchAction("https://jsonplaceholder.typicode.com/users", {
      method: 'GET',
    }));
  }, [dispatch]);
 
  return (
    <Layout>
      <div className= "grid grid-rows-5 grid-flow-col gap-[20px] rounded-[20px] bg-white w-full h-full"> 
        <div className="row-span-1 bg-babyBlue rounded-[20px]">
            <DashboardHeader/>
            <div className="grid grid-cols-10 gap-4 p-3 ">
              <CustomButton label='Add Product' className="flex gap-3 items-center justify-center col-span-2 border-navyBlue border-[1px] rounded-[10px] font-quicksand ">
                <IoMdAddCircle/>
              </CustomButton>
              <CustomButton lable="ViewProduct" className="flex gap-3 items-center justify-center col-span-2 border-navyBlue border-[1px] rounded-[10px] bg-navyBlue text-white font-quicksand">
                <GrView className="fill-white"/>
              </CustomButton>
            </div>
        </div>
        <div className="row-span-4 p-4 font-quicksand">
          <div className="font-quicksand text-navyBlue sm:text-[10px] sm:font-medium md:text-[18px] md:font-semibold py-2 ">Add Product </div>
          <CustomForm className=" font-quicksand p-5" formFields={formFields} onSubmit={handleSubmit} initialValues={{ }} />
        </div>
      </div>

      
    </Layout>
  );
}
const mapStateToProps = (state) => {
  return {
    addProduct: state.product.data,
    selectedValue: state.select.selectedValue,
    options: state.select.options,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    CustomizablePostRequest: (data) => dispatch(CustomizablePostRequest(data)),
    setSelectedValue: (data) => dispatch(setSelectedValue(data)),
    setOptions: (data) => dispatch(setOptions(data)), 
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SidebarProducts);