import logo from './logo.svg';
import './App.css';
import React from 'react'
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)

class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }

    }
  }
  addItem=(e)=>{
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
  //  console.log(items)
    }
  }
  handleInput=(e)=>{
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem=(key)=>{
    const newList=this.state.items.filter((item)=>{
        if(item.key!=key)
        {
          return item;
        }
    })
    this.setState({items:newList})
  }

  setUpdate=(value,key)=>{
    const n=this.state.items.map((item)=>{
      if(item.key==key)
      {
        item.text=value
      }
      return item
    })
    this.setState({items:n})
  }

  render()
  {
    return(
      <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="enter text"
          value={this.state.currentItem.text}
          onChange={this.handleInput}
          ></input>
          <button type="submit">Add</button>
        </form>

      </header>

      <ListItems items={this.state.items}
      deleteItem={this.deleteItem}
      setUpdate={this.setUpdate}/>
      </div>
    )
  }
}


export default App;
