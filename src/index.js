import React from 'react';
import ReactDOM from 'react-dom';
import {DragDropContext} from 'react-beautiful-dnd';
import registerServiceWorker from './registerServiceWorker';
import initialData from './initial-data';
import 'semantic-ui-css/semantic.min.css';
import '@atlaskit/css-reset';
import Column from './column';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
class App extends React.Component {
  state=initialData;

  onDragStart = () => {
    document.body.style.color = 'orange';
  };


  onDragEnd = result => {
    document.body.style.color = 'inherit';
    const {destination, source, draggableId} = result;

    if(!destination){ return; }
    if(destination.droppableId === source.droppableId && destination.index === source.index){ return; }

    const start = this.state.columns[source.droppableId];
    console.log(start);
    const finish = this.state.columns[destination.droppableId];

    if(start === finish){
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index,0,draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      };
      //case2: moving from one column to other
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index,1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(finish.index,0,draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };
      const newState = {
        ...this.state,
        columns:{
          ...this.state.columns,
          [newStart.id]:newStart,
          [newFinish.id]:newFinish,
        },
      };
      this.setState(newState);
    };

  render(){
    return(
        <DragDropContext
        onDragEnd={this.onDragEnd }
        onDragStart={this.onDragStart}
        >
        <Container>
        {this.state.columnOrder.map((columnId) => {
        const column = this.state.columns[columnId];
        const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={tasks} />;
        })}
        </Container>
        </DragDropContext>
    )
  }
 }
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
