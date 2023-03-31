export const checkPermission = (permission, permissionArray)=>{
    return permissionArray.some(item => item.name === permission);
}