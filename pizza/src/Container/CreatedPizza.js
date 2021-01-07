import React, { useEffect, useRef,useState } from 'react';
import RenderCustomizePizza from '../Component/CustomizePizzaTable';

export default function CreatePizza(props){


    return(
        <section className="height-full" style={{backgroundColor:"lightgray",width:"100%"}}>
           
            <RenderCustomizePizza piz={props.currentPizza}/>
        </section>
    )
}