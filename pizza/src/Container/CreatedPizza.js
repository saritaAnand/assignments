import React from 'react';

export default function CreatePizza(props){
    return(
        <section className="height-full" style={{backgroundColor:"lightgray",width:"100%"}}>
            <div onClick={()=>console.log(props.selectedPizza)}>Hii</div>
        </section>
    )
}