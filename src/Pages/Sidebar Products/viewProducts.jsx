import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAction } from "../../Redux/Actions/fetchActions";
import { setOngoingCurrentPage, setOngoingItemsPerPage } from "../../Redux/Actions/paginationActions";
import { Pagination } from "antd";
import CustomButton from "../../Components/Common/CustomButton";
import { API_BASE_URL } from "../../Config/URLs/Endpoint";

export default function ViewProducts() {
  
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.fetch);
    
    const { ongoingCurrentPage, ongoingItemsPerPage } = useSelector((state) => state.pagination);

    const startOngoingIndex = (ongoingCurrentPage - 1) * ongoingItemsPerPage;
    const endOngoingIndex = ongoingCurrentPage * ongoingItemsPerPage;
  
    const displayedOngoingData = Array.isArray(data) ? data.slice(startOngoingIndex, endOngoingIndex) : [];
  
    const handleOngoingPageChange = (page) => {
      dispatch(setOngoingCurrentPage(page)); 
    };
  
    const handleOngoingItemsPerPageChange = (pageSize) => {
      dispatch(setOngoingItemsPerPage(pageSize)); 
    };
    
    useEffect(() => {
        dispatch(fetchAction(`${API_BASE_URL}/store/products`, {
          method: 'GET',
        }));
    }, [dispatch]);

    const handleUpdate = (itemId, updatedData) => {
    axios.put(`https://fakestoreapi.com/products/${itemId}`, updatedData)
        .then(response => {
        console.log('Item updated successfully', response.data);
        })
        .catch(error => {
        console.error('Error updating item', error);
        });
    };


    const handleDelete = (itemId) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
          fetch(`https://fakestoreapi.com/products/${itemId}`, {
            method: "DELETE",
          })
            .then((response) => {
              if (response.status === 200) {
                
              } else {
               
              }
            })
            .catch((error) => {
              console.error("Error while deleting item:", error);
            });
        }
      };
      
  
    return (
      <div>
        <div className="grid grid-cols-3">
          {displayedOngoingData && displayedOngoingData.map((item, index) => (
            <div key={index} className="col-span-1 m-2">
              <div className="grid border-[1px] border-babyBlue rounded-sm font-quicksand p-3">
                <div className= "">
                  <img src={item.image} alt="Product Sub Category Image" className="p-4 border-r-[1px] border-navyBlue" />
                </div>
                <div className="">
                  <div className="font-quicksand p-2">
                    <span className="font-semibold font-quicksand">Product: </span>
                    {item.name}
                    <div className="flex gap-[20px] pt-3">
                    <CustomButton
                        label='Update'
                      onClick={() => handleUpdate(item.id)}
                      style={{ marginRight: "8px" }}
                    >
                      Update
                    </CustomButton>
                    <CustomButton type="danger" label='Delete' onClick={() => handleDelete(item.id)}>
                      Delete
                    </CustomButton>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Pagination
          current={ongoingCurrentPage}
          total={data && data.length}
          pageSize={ongoingItemsPerPage}
          onShowSizeChange={handleOngoingItemsPerPageChange} 
          onChange={handleOngoingPageChange}
          className="p-3"
        />
      </div>
    );
}
