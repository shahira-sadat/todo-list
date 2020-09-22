import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField"
import Link from "@material-ui/core/Link";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import link from 'react-router-dom/Link';

import ArrowIcon from "@material-ui/icons/ArrowBack";


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }
updateInput(key, value){
  this.setState({
    [key]: value
  });
}

addItem(){
  const newItem={
    id: 1 + Math.random(),
    value: this.state.newItem.slice() 
  };

  const list=[...this.state.list];

  list.push(newItem);

  this.setState({
    list,
    newItem: ""
  });
}


  deleteItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList}); 
  }

render(){
  return (
    <div className="App">
      <div className="container">

        <h3 style={{width:"600px", marginTop:"50px"}}>To Do List</h3>
        <TextField style={{width:"600px", margin:"50px auto 10px auto"}}
               variant="standard"
               fullWidth
                label="Add an item"
                color="primary"
                name="task"
                placeholder="Type item here..."
                value={this.state.newItem}
                onChange={e => this.updateInput("newItem", e.target.value)}
                 />
        <Button
          onClick={() => this.addItem()}  color="primary" style={{margin:"75px auto 10px auto"}}>Add</Button>
        <h4>
          {this.state.list.map(item => {
            return(
              <p key={item.id} style={{fontSize:"26px", }}> 
              {item.value}
              <Button  variant="contained"  style={{position:"relative", left:"2vw", color:"white", background:"#cf0000"}}
               onClick={()=> this.deleteItem(item.id)} > X

              </Button>
              </p>
            )
          })}
        </h4>
      </div>
     
    </div>
  );
}
}

export default App;
