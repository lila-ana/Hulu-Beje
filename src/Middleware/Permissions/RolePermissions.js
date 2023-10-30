export const checkUserPermission=(necassaryPermissions=[])=>{
    
    // let myPermissions= localStorage?.getItem('permissions')?.split(',');
    let permissions= userData.permissions
    
    return necassaryPermissions?.every((perm)=>{
        return myPermissions?.includes(perm)
    }) 
}

const mapStateToProps = (state) => {
    return {
      userData: state.user,
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
      CustomizablePostRequest: (data) => dispatch(CustomizablePostRequest(data)),
    }
  };