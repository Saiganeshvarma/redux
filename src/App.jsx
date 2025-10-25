import React, { useEffect, useState } from 'react'


function App(){
    var [data,setData] = useState([])
    var [cart,setCart] = useState([])


    async function fetchData(){
        var result = await fetch("https://fakestoreapi.com/products")
        var myResult = await result.json()
        setData(myResult)
    }
    useEffect(()=>{
        fetchData()
    },[])

    function addToCart(myItem){

        var existingItem = cart.find(cartItem=>cartItem.id === myItem.id)
        if(!existingItem){
            setCart([...cart,myItem])
        }else{
            alert("exists in the cart")
        }


    }

    function removeCart(myItem){

        var newCart = cart.filter(item=>item.id !== myItem.id  )
        setCart(newCart)

    }

    console.log(cart);
    return(
        <div>
            {
                data.map((item)=>{
                    return(
                        <div key={item.id}>
                            <h1>{item.id}</h1>
                            <h1>{item.title}</h1>
                            <img src={item.image} alt="" />
                            <button onClick={()=>addToCart(item)}>AddToCart</button>
                        </div>

                    )
                })
            }

            <div>
                <h1>cart { cart.length}</h1>
                <div>
                    {
                        cart.map((item)=>{
                            return(
                                <div key={item.id}>
                                    <h1>{item.id}</h1>
                                    <h1>{item.title}</h1>
                            <img src={item.image} alt="" />

                                    <button onClick={ ()=> removeCart(item)}>remove Item</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
export default App 