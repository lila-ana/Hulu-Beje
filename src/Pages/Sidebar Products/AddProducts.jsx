import React, { useMemo } from "react";
import { connect, useDispatch } from "react-redux";
import CustomInput from "../../Components/Common/CustomInput";
import { CustomizablePostRequest } from "../../Redux/Actions/postActions";
import CustomForm from "../../Components/Common/CustomForm";
import { API_BASE_URL } from "../../Config/URLs/Endpoint";

 function AddProducts({addProduct, CustomizablePostRequest}) {
    const AddProductMemo = useMemo(() => addProduct, [addProduct]);
    console.log(AddProductMemo);

    const formFields = [
      {
        name: "name",
        rules: [{required: true, message:"Please enter product name" }],
        component: <CustomInput placeholder="Product Name" className="" type="text"/>
      },
      {
        name: "description",
        rules: [{required: true, message:"Please enter product description" }],
        component: <CustomInput placeholder="Product Description" className="" type="textarea"/>
      },
      {
        name: "category",
        rules: [{required: true, message:"Please enter product category" }],
        component: <CustomInput placeholder="Product Category" className="" type="text"/>
      },
      {
        name: "price",
        rules: [{required: true, message:"Please enter product price" }],
        component: <CustomInput placeholder="Product price" className="" type="number"/>
      },
      {
        name: "quantity",
        rules: [{required: true, message:"Please enter product quantity" }],
        component: <CustomInput placeholder="Product Quantity" className="" type="number"/>
      },
      {
        name: "ProductImage",
        rules: [{required: false, message:"Please Enter Upload Product Image" }],
        component: <CustomInput placeholder="Product Image" className="" type="file"/>
      },
    ]
    const handleSubmit = (value) => {  
      const postOptions = {
        method: 'post',
        url: `${API_BASE_URL}/store/products`,
        data: {
            value
        },
        headers: {
            "Content-Type":"multipart/form-data",
            "Authorization":""
        }
    }
    console.log("values", value);
    
      CustomizablePostRequest(postOptions)
    }
    
  
return (
    <div className=" p-1 font-quicksand">
        <div className="font-quicksand text-navyBlue sm:text-[10px] sm:font-medium md:text-[18px] md:font-semibold ">Add Product </div>
        <CustomForm label="Add Product" className=" font-quicksand p-2" formFields={formFields} onSubmit={handleSubmit} initialValues={{ }} />
    </div>
);
}
const mapStateToProps = (state) => {
    return {
      addProduct: state.product.data,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      CustomizablePostRequest: (data) => dispatch(CustomizablePostRequest(data)),
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);
