const AddToCart=id =>{
 
    const playerCart=getpreviousCart();
    playerCart[id]=1;
    localStorage.setItem('playerCart',JSON.stringify(playerCart));
}
const getpreviousCart=()=>{
    let playerCart={};
    const previousCart=localStorage.getItem('playerCart');
    if(previousCart){
        playerCart=JSON.parse(previousCart);
    }
   return playerCart;
}
export{
    AddToCart,
    getpreviousCart
}