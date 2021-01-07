import React from 'react';
import MakePizza from './Container/MakePizza';
import CreatedPizza from './Container/CreatedPizza';
import './App.css';
import './CSS/flexBox.css';
import './CSS/padding.css';

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
                selectedPizza:{}
             }
            
            }

      handleChange(e){
        console.log(e.target.value);
        console.log(e.target.name);
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
        console.log(this.state.selectedPizza);
      }
    render(){
        return(
            <main className="flex">
                <MakePizza pizza={this.state.pizza} selectedPizza={this.state.selectedPizza} changeHandler={this.handleChange.bind(this)}/>
                <CreatedPizza selectedPizza={this.state.selectedPizza}/>
            </main>
        )
    }

}

export default App;
