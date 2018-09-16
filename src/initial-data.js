const initialData = {
  tasks: {
    'task-1':{ id:'task-1', content:'Have ur Breakfast'},
    'task-2':{ id:'task-2', content:'Go and Study'},
    'task-3':{ id:'task-3', content:'Do Graphql'},
    'task-4':{ id:'task4', content:'Reactjs'},
  },
  columns: {
    'column1':{
        id:'column1',
        title:'To-do',
        taskIds:['task-1','task-2','task-3','task-4'],
      },
    },
  columnOrder: ['column1'],
};

export default initialData;
