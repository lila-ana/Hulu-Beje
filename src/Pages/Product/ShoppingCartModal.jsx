import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'antd'; // Import the modal components from Ant Design
import { removeFromCart } from '../../Redux/Actions/cartActions';
import CustomButton from '../../Components/Common/CustomButton';

const ShoppingCartModal = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const calculateTotalPrice = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.price; 
    });
    return total;
  };
  
  
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const total = calculateTotalPrice(cartItems);

  return (
    <div>
      <CustomButton label='Open Shopping Cart' onClick={showModal}></CustomButton>
      <Modal
        title="Shopping Cart"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ul>
          {cartItems.map((item) => (
            <li className="py-2" key={item.id}>
              <div className='font-quicksand '><span className='font-semibold'>Product Name: </span> {item.title}</div>
              <div className='font-quicksand '><span className='font-semibold'>Price: </span> ${item.price}</div>
              <div className='py-1'><CustomButton label='Remove' className onClick={() => handleRemoveFromCart(item.id)}></CustomButton></div>
            </li>
          ))}
        </ul>
        <div className='font-quicksand p-4'> <span className='font-semibold'>Total Price:</span>  ${total}</div>
      </Modal>
    </div>
  );
};

export default ShoppingCartModal;
