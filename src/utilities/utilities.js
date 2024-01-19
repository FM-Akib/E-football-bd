const AddToCart=id =>{
 
     const playerCart=getpreviousCart();
    // playerCart[id]='signed';

    const status = playerCart[id];
    if (!status) {
        playerCart[id] = 1;
    }
    else {
        return;
    }

    localStorage.setItem('playerCart',JSON.stringify(playerCart.id));

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