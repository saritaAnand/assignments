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
                            return(
                                <tr key={index}>
                                    <td>{piz.title}</td>
                                    <td>{piz.name}</td>
                                    <td>&nbsp; &#8377;{piz.price}</td>
                                    <td><input type="number" value={piz.qty} /></td>
                                    <td>&nbsp; &#8377;{piz.price * piz.qty}</td>
                                    <td></td>
                                </tr>
                            )

                        })
                    }

                </tbody>
            </table>

        </section>
    )
}