import React from 'react';


export default function RenderCustomizePizza (props){
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
                        <th rowSpan="2">Per Unit Total Price</th>
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
                                        <td>&nbsp; &#8377;{piz.price}</td>
                                        {
                                                index%3 === 0 &&
                                                <React.Fragment>
                                        <td rowSpan="3"><input type="number" 
                                            min="1" max="10"
                                            defaultValue={piz.qty} 
                                            onChange={(e)=>props.changeHandler(e,index)}
                                        /></td>
                                        <td rowSpan="3">&nbsp; &#8377;{piz.price * piz.qty}</td>
                                        </React.Fragment>
                                         }
                                        {
                                              
                                            index%3 === 0 &&
                                            <td rowSpan="3"></td>
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