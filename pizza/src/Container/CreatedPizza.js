import React, { useEffect, useRef,useState } from 'react';
import RenderCustomizePizza from '../Component/CustomizePizzaTable';

export default function CreatePizza(props){

    const comPizArr = useRef();
    const [wholePizArr,setWholePizArr] = useState(()=>{return(null)});

    function completePizzaArr(p){
        comPizArr.current = p.concat(comPizArr.current);
        setWholePizArr(comPizArr.current);
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
        setWholePizArr(arr);
    }

    useEffect(()=>{
        completePizzaArr(props.currentPizza);
    },[props.currentPizza])

    return(
        <section className="height-full" style={{width:"100%"}}>
            <RenderCustomizePizza
             changeHandler={handleChangeQty}
             piz={wholePizArr}/>
        </section>
    )
}