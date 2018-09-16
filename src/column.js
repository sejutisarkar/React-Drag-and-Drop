import React from 'react';
import Task from './task';
export default class Column extends React.Component {
  render(){
    return(
      <div>
        <h3>Taks</h3>
        <div className="ui three column grid">
          <div className="column">
            <h4>{this.props.column.title}</h4>
            <div className="ui segment">
              // <Task />
            </div>
          </div>
          <div className="column">
            <div className="ui segment">

            </div>
          </div>
          <div className="column">
            <div className="ui segment">

            </div>
          </div>
        </div>
      </div>
    )
  }
}
