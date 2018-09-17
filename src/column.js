import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Task from './task';
import styled from 'styled-components';
const Container = styled.div`
  margin:8px;
  border: 1px solid lightgray;
  border-radius:4px;
  width:250px;
  display:flex;
  flex-direction: column;
`;
const TaskList = styled.div`
  padding:8px;
  transition:background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'blue' : 'white')}
  flex-grow:1;
  min-height:100px;
`;

const Title = styled.h3`
  padding:8px;
`;
export default class Column extends React.Component {
  render(){
    return(
      <Container>
        <Title>{this.props.column.id}</Title>
        <Droppable droppableId={this.props.column.id}>
              {(provided,snapshot) => (
                <TaskList
                  innerRef={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {this.props.tasks.map((task,index) => {
                    return <Task key={task.id} task={task} index={index}/>})}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
    )
  }
}
