import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';
const Container = styled.div`
  border: 1px solid lightgray;
  padding:10px;
  margin:10px;
  border-radius:2px;
  background-color:${props => (props.isDragging ? 'lightGreen' : 'white')};
  display: flex;
`;
//custom dragHandleFeature
// const Handle = styled.div`
//   width:20px;
//   height:20px;
//   background-color:orange;
//   margin-right:8px;
//   border-radius:4px;
// `;
export default class Task extends React.Component {
  render(){
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
      {(provided,snapshot) => (
        <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={provided.innerRef}
        isDragging={snapshot.isDragging}

        >
          {this.props.task.content}
        </Container>
      )}
      </Draggable>
    );
  }
}
