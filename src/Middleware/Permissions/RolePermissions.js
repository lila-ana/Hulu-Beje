export const checkUserPermission=(necassaryPermissions=[])=>{
    
    let myPermissions= localStorage?.getItem('permissions')?.split(',');
    
    return necassaryPermissions?.every((p)=>{
        return myPermissions?.includes(p)
    }) 
}