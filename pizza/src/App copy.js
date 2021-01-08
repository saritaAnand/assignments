import React from 'react';
import MakePizza from './Container/MakePizza';
import CreatedPizza from './Container/CreatedPizza';
import './App.css';
import './CSS/flexBox.css';
import './CSS/padding.css';
import './CSS/table.css'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state={
            pizza:
                {    
                  toppings:{
                    // title:`toppings`,
                    items:[
                      {name:"paneer", price: 50},
                      {name:"corn", price:20},
                      {name:"capsicum",price : 30}]
                  } ,  
                  
                  crusts:{
                      items:[
                    {name:'handTossed', price:80},
                    {name:'normal', price:70},
                    {name:'cheeseBurst', price: 100}
                  ]
                  }, 
                  
                  pizzaType:{
                    // title:`pizzaType`,
                    items:[
                    {name:'panBase', price: 20},
                    {name:'classic', price : 30}
                    ]
                  }
                },
                selectedPizza:[],
                currentPizza:[],
                afterRemoveWholeArr:[],
                isDisable: false,
                removeTotQty: 0
             }
            
            }

     

      handleChange(e){
        const name = e.target.name;
        let items=e.target.value;
        this.setState(state=>{
          return{
            selectedPizza:{
              ...state.selectedPizza,
              [name]:{
                ...state.selectedPizza[name],
                items
              }
            }
          }
        })
      }

      customizePizza(){
        let currPizz = this.currentPizza();
        this.setState({
          currentPizza: currPizz
        })
      }

      currentPizza(){
        let list = [];
        for (let [key, value] of Object.entries(this.state.selectedPizza)) {
            let cost = value.items.split(":");
            let obj = {
                title: key,
                price: parseInt(cost[1]),
                name: cost[0],
                qty:parseInt(1),
                isAddCart: false,
                isRemove: false
            }
            list.push(obj);
        }
        return list;
      }

      handleRemove(ind,arr){
        this.remove(ind,arr);
        // let qty = this.toatQtyOnRemove();
        // this.totOnRem(qty);

      }
      remove(ind,arr){
        arr.splice(ind,3);
        this.setState({
          afterRemoveWholeArr:arr
        },()=>this.toatQtyOnRemove()) 
        console.log(this.state.afterRemoveWholeArr)
      }

      totOnRem(q){
        //let q = this.toatQtyOnRemove();
        this.setState({
          removeTotQty:q
        })
        console.log(this.state.removeTotQty)
      }

      toatQtyOnRemove(){
        let q = 0;
          this.state.afterRemoveWholeArr && this.state.afterRemoveWholeArr.map((item,index)=>{
              if(item){
                console.log(item.qty)
                console.log(item.price)
                console.log(q)
                  return(
                      q = q + parseInt(item.qty) * parseInt(item.price)
                  )
              }  
          })
          this.totOnRem(q);
          console.log(q);
          
      }


      disableMakePizz(){
        this.setState({
          isDisable: true
        })
      }

    render(){
        return(
            <main className="flex">
              {
                !this.state.isDisable && 
              
                <MakePizza pizza={this.state.pizza} currentPizza={this.state.currentPizza} selectedPizza={this.state.selectedPizza} customizePizza={this.customizePizza.bind(this)} changeHandler={this.handleChange.bind(this)}/>
              }
                <CreatedPizza 
                selectedPizza={this.state.selectedPizza} 
                disableMakePizz={this.disableMakePizz.bind(this)}
                currentPizza={this.state.currentPizza} 
                afterRemoveWholeArr={this.state.afterRemoveWholeArr} 
                rm={this.state.removeTotQty}   
                remove={this.handleRemove.bind(this)}/>
            </main>
        )
    }

}

export default App;
