import React, { Component } from 'react';
import './App.css';
import logo from './milesLogo.png';
import './DragDrop/Drag.css';

export default class App extends Component {
  state = {
    tasks: [
      { name: "Reward 1", category: "Rewards", bgcolor: "red" },
      { name: "Reward 2", category: "Rewards", bgcolor: "green" },
      { name: "Reward 3", category: "Rewards", bgcolor: "blue" },
      { name: "Reward 4", category: "Rewards", bgcolor: "yellow" },
      { name: "Reward 5", category: "Rewards", bgcolor: "orange" },
    ]
  }

  onDragStart = (ev, id) => {
    ev.dataTransfer.setDate("id", id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.categorgy = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
  }

  render() {
    var tasks = {
      rewards: [],
      category01: [],
      category02: [],
      category03: [],
      category04: [],
      category05: [],
    }

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container-drag">
        <h2 className="header"><img src={logo} className="header-logo" alt="Miles" /></h2>
        <div className="wip"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => { this.onDrop(e, "wip") }}>
          <span className="task-header">WIP</span>
          {tasks.wip}
        </div>
        <div className="droppable"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "complete")}>
          <span className="task-header">COMPLETED</span>
          {tasks.complete}
        </div>
      </div>
    );
  }
}
