import React, { useEffect, useRef,useState } from 'react';
// import Cart from '../Component/Cart';
import RenderCustomizePizza from '../Component/CustomizePizzaTable';

export default function CreatePizza(props){

    const [wholePizArr,setWholePizArr] = useState(null);
    const comPizArr = useRef();
    const [totQty,setTotQty] = useState(0);
    // const [tr, setTr] = useState(false);

    function completePizzaArr(p){
        comPizArr.current = p.concat(comPizArr.current);
        setWholePizArr(comPizArr.current);
    }

    function handleAddTot(){
        addTotal();
        props.disableMakePizz();
        // setTr(true)
    }

    // function addRemoveTot(arr){
    //     let qty = 0;
    //     console.log(comPizArr.current);
    //     arr && arr.map((item,index)=>{
    //         if(item){
    //             return(
    //                 qty = qty + parseInt(item.qty) * parseInt(item.price)
    //             )
    //         }  
    //     })
    // }

    function addTotal(){
        let qty = 0;
        console.log(comPizArr.current);
        comPizArr.current && comPizArr.current.map((item,index)=>{
            if(item){
                return(
                    qty = qty + parseInt(item.qty) * parseInt(item.price)
                )
            }  
        })
        console.log(qty);
        setTotQty(qty);
    }

    function qtyChangeWholeArr(v,ind){   
        wholePizArr && wholePizArr.filter((item,index)=>{
            if(index === ind || index === (ind+1) || index === (ind+2)){
                return(
                item.qty = parseInt(v)
                )
            }
        })
        return wholePizArr;   
    }

    function handleChangeQty(e,ind){
        let arr=qtyChangeWholeArr(e.target.value,ind);
        comPizArr.current = arr;
        setWholePizArr(comPizArr.current);
    }

    useEffect(()=>{
        completePizzaArr(props.currentPizza);
    },[props.currentPizza])

     function removerr(ind){
    //     comPizArr.current.splice(ind,3);
    //     setWholePizArr(comPizArr.current);
    //     addRemoveTot(comPizArr.current);
        console.log(comPizArr.current);
     }

    return(
        <section className="height-full" style={{width:"100%"}}>
            <RenderCustomizePizza
             changeHandler={handleChangeQty}
             remove={props.remove}
             removerr={removerr}
             piz={wholePizArr}
            //  disableMakePizz={props.tr}
             />
            <div className="flex justify-content--center margin-top-4">
             <button onClick={handleAddTot}>ADD All Items to Cart</button> 
             </div>
             
             {
                 totQty !== "0" && 
                 
                <div className=" margin-top-4 " style={{textAlign:"center"}}>Total Payable Quantity:&nbsp; &#8377;{totQty ?totQty : null }</div>
             }
            

            {/* <Cart ta={totQty} rm ={props.rm}/> */}
             
        </section>
    )
}