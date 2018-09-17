const initialData = {
  tasks: {
    'task-1':{ id:'task-1', content:'Have ur Breakfast'},
    'task-2':{ id:'task-2', content:'Go and Study'},
    'task-3':{ id:'task-3', content:'Do Graphql'},
  },
  columns: {
    'column1':{
        id:'column1',
        title:'To-do',
        taskIds:['task-1','task-2','task-3'],
      },
    'column2':{
        id:'column2',
        title:'Progress',
        taskIds:[],
      },
    'column3':{
        id:'column3',
        title:'Done',
        taskIds:[],
      },
    },
  columnOrder: ['column1','column2','column3'],
};

export default initialData;
