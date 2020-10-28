import React, {Component} from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList.js'

class App extends Component {
  counter = 9;
  state = { 
    tasks: [
      {
        id: 0,
        text: 'Zagrać w coś planszowego',
        date: '2020-11-15',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Zagrać w coś konsolowego',
        date: '2020-11-25',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'Zagrać w coś komputerowego',
        date: '2020-12-15',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: 'Zagrać w coś na komórce',
        date: '2020-12-25',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: 'Zagrać w piłe',
        date: '2020-12-20',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: 'Zagrać w tenisa',
        date: '2020-11-02',
        important: true,
        active: true,
        finishDate: null
      },
    ]
   }

  deleteTask = (id) => {
    let tasks = [...this.state.tasks]
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1) 
    tasks = tasks.filter(task => task.id !== id)

    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    // console.log("change elementu o id "+id);
    let tasks= Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.counter++;
    // console.log(task);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    return true;
  }

  render() { 
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask}/>
        <TaskList 
          tasks={this.state.tasks} 
          delete={this.deleteTask} 
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}
 
export default App;
