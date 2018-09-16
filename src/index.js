import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import initialData from './initial-data';
import 'semantic-ui-css/semantic.min.css';
import '@atlaskit/css-reset';
import Column from './column';

class App extends React.Component {
  state=initialData;

  render(){
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
      // return <Column keys={column.id} column={column} tasks={tasks} />;
      console.log(column);
      console.log(tasks);
    });
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
