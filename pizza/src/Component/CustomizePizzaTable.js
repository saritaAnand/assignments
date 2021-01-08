import React from 'react';


export default function RenderCustomizePizza (props){
    function handleRemove(ind,arr){
        props.removerr(ind);
        props.remove(ind,arr);
    }
     

    return(
        <section className="flex">
              <table className="client">
                <thead>
                    <tr>
                        <th colSpan="6">Pizza</th>
                    </tr>
                    <tr>
                        <th>Sl.No</th>
                        <th rowSpan="2"></th>
                        <th rowSpan="2">Items</th>
                        <th rowSpan="2">Price</th>
                        <th rowSpan="2">Quantity</th>
                        {/* <th rowSpan="2">Per Unit Total Price</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        props.piz && props.piz.map((piz,index)=>{
                            if(piz){

                                return(
                                    <tr key={index}>
                                        {
                                                index%3 === 0 &&
                                        <td rowSpan="3">
                                            
                                               {(index/3)+1}
                                            
                                        </td>
                            }
                                        <td>{piz.title}</td>
                                        <td>{piz.name}</td>
                                        <td>&nbsp; &#8377;{piz.price ? piz.price.toFixed(2):0}</td>
                                        {
                                                index%3 === 0 &&
                                                <React.Fragment>
                                        <td rowSpan="3"><input type="number" 
                                            min="1" max="10"
                                            defaultValue={piz.qty} 
                                            onChange={(e)=>props.changeHandler(e,index)}
                                            readOnly = {props.disableMakePizz ? true:false}
                                        /></td>
                                        </React.Fragment>
                                         }
                                        {/* <td>&nbsp; &#8377;{piz.price * piz.qty}</td> */}
                                        
                                        {
                                              
                                            index%3 === 0 &&
                                            <td rowSpan="3"><button onClick={()=>handleRemove(index,props.piz)}>Remove Item</button></td>
                                        }
                                        
                                    </tr>
                                )
    
                            }
                           
                        })
                    }

                </tbody>
            </table>

        </section>
    )
}