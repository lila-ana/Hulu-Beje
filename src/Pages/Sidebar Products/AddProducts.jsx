import React, { useState } from "react";
import { connect } from "react-redux";
import CustomInput from "../../Components/Common/CustomInput";
import CustomForm from "../../Components/Common/CustomForm";
import { productCreate } from "../../Store";

 function AddProducts({products, productCreate}) {
    
  const [formValues, setFormValues] = useState({});

    const formFields = [
      {
        name: "name",
        rules: [{required: true, message:"Please enter product name" }],
        component: 
          <CustomInput 
            placeholder="Product Name" 
            className="" 
            type="text"
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
          />
      },
      {
        name: "description",
        rules: [{required: true, message:"Please enter product description" }],
        component: 
        <CustomInput 
          value={formValues.description}
          onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
          placeholder="Product Description" 
          className="" 
          type="textarea"
        />
      },
      {
        name: "category",
        rules: [{required: true, message:"Please enter product category" }],
        component: 
          <CustomInput 
            placeholder="Product Category" 
            className="" 
            type="text"
            value={formValues.category}
            onChange={(e) => setFormValues({ ...formValues, category: e.target.value })}
          />
      },
      {
        name: "price",
        rules: [{required: true, message:"Please enter product price" }],
        component: 
          <CustomInput 
            placeholder="Product price" 
            className="" 
            type="number"
            value={formValues.price}
            onChange={(e) => setFormValues({ ...formValues, price: e.target.value })}
          />
      },
      {
        name: "quantity",
        rules: [{required: true, message:"Please enter product quantity" }],
        component: 
          <CustomInput 
            placeholder="Product Quantity" 
            className="" 
            type="number"
            value={formValues.quantity}
            onChange={(e) => setFormValues({ ...formValues, quantity: e.target.value })}
          />
      },
      {
        name: "ProductImage",
        rules: [{required: false, message:"Please Enter Upload Product Image" }],
        component: 
          <CustomInput 
            placeholder="Product Image" 
            className="" 
            type="file"
            value={formValues.ProductImage}
            onChange={(e) => setFormValues({ ...formValues, ProductImage: e.target.value })}
          />
      },
    ]
    
  const value = {
    "name":  formValues.name,
    "description":  formValues.description,
    "category":  formValues.category,
    "price":  formValues.price,
    "quantity":  formValues.quantity,
    "ProductImage":  formValues.ProductImage,
  }
  console.log('value', value);
  
  
return (
    <div className=" p-1 font-quicksand">
        <div className="font-quicksand text-navyBlue sm:text-[10px] sm:font-medium md:text-[18px] md:font-semibold ">Add Product </div>
        <CustomForm label="Add Product" className=" font-quicksand p-2" formFields={formFields} onSubmit={()=>productCreate(value)} initialValues={{ }} />
    </div>
);
}
const mapStateToProps = (state) => {
    return {
      products: state.productReducer.products,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      productCreate: (value) => dispatch(productCreate(value)),
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);
