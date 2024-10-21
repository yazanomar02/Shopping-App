import { CanActivateFn } from '@angular/router';

export const productDetialGuard: CanActivateFn = (route, state) => {
  console.log("product detail guard has been called!!");

  let productId = Number(route.paramMap.get("id")) 

  if(isNaN(productId) || productId < 1){
    alert("Error");
    return false;
  }
  return true;
};
