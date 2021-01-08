import React from 'react';

export default function CreatePizza(props){
    return(
        
       
        <section className="height-full pad-top-10" style={{ backgroundColor:"skyblue",padding:"5%"}}>
            <h2 onClick={()=>console.log(props.currentPizza)}>Customize Pizza</h2>

            <label htmlFor="toppings" className="capitalize pad-top-2"><b>Toppings</b></label><br/>
            <select id="toppings" className="form-control" 
                name="toppings" 
                onChange={props.changeHandler} 
                >
                <option defaultValue >--Choose--</option>
                {
                    props.pizza && props.pizza.toppings.items.map((item,index)=>{
                            return (
                                <option key={index} value={`${item.name}:${item.price}`}>{item.name}:&nbsp; &#8377;{item.price}</option>
                            );
                    })
                }
            </select>
            
            <div className="pad-top-25">
                <label htmlFor="crusts" className="capitalize pad-top-2"><b>crusts</b></label><br/>
                {
                    props.selectedPizza && props.selectedPizza.toppings && props.selectedPizza.toppings.items &&
                
                <select id="crusts" className="form-control" 
                    name="crusts" 
                    onChange={props.changeHandler} 
                    >
                    <option defaultValue >--Choose--</option>
                    {
                        props.pizza && props.pizza.crusts.items.map((item,index)=>{
                                return (
                                    <option key={index} value={`${item.name}:${item.price}`}>{item.name}:&nbsp; &#8377;{item.price}</option>
                                );
                        })
                    }
                </select>
}
            </div>


            <div className="pad-top-25">
                <label htmlFor="pizzaType" className="capitalize pad-top-2"><b>pizzaType</b></label><br/>
                {
                    props.selectedPizza && props.selectedPizza.crusts && props.selectedPizza.crusts.items &&
                <select id="pizzaType" className="form-control" 
                    name="pizzaType" 
                    onChange={props.changeHandler} 
                    >
                    <option defaultValue >--Choose--</option>
                    {
                        props.pizza && props.pizza.pizzaType.items.map((item,index)=>{
                                return (
                                    <option key={index} value={`${item.name}:${item.price}`}>{item.name}:&nbsp; &#8377;{item.price}</option>
                                );
                        })
                    }
                </select>
            }
            </div>

            <button className="margin-top-10" onClick={props.customizePizza}>Cutomize Pizza</button>
            <div className="pad-top-25">Note:Please select items to create Pizza</div>
        </section>
    )
}