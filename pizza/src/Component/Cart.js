import React from 'react';


export default function Cart (props){
    return(
        <section>
            <div className="bdr-btm flex pad">
                <h3>Order Summary</h3>
            </div>
            <div className="flex pad bdr-btm flex-space--btw">
                <div>Total Amount</div>
                    <div className="text--bold text--darker">&#8377; {(props.ta ? props.ta : 0).toFixed(2)}</div>

                    <div>Remaining ITem Total</div>
                    <div className="text--bold text--darker">&#8377; {(props.rm ? props.rm : 0).toFixed(2)}</div>
            </div>
        </section>
    )
}
