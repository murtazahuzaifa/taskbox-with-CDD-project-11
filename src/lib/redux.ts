import { createSlice, PayloadAction, configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { TaskType } from '../components/Task';
// import { createStore, ActionFromReducer } from 'redux';
// import {} from 'react-redux';

const defaultTasks: { tasks: TaskType[] } = {
    tasks: [
        { id: '1', title: 'Something', state: 'TASK_INBOX', updatedAt: new Date() },
        { id: '2', title: 'Something new', state: 'TASK_INBOX', updatedAt: new Date() },
        { id: '3', title: 'Something more', state: 'TASK_INBOX', updatedAt: new Date() },
        { id: '4', title: 'Something else', state: 'TASK_INBOX', updatedAt: new Date() },
        { id: '5', title: 'Something again', state: 'TASK_INBOX', updatedAt: new Date() },
    ]
}

const slice = createSlice({
    name: 'tasksSlice',
    initialState: defaultTasks,
    reducers: {
        archiveTask: (state, { payload }: PayloadAction<string>) => {
            state = {
                tasks: state.tasks.map(task =>
                    task.id === payload ? { ...task, state: "TASK_ARCHIVED" } : task
                ),
            };
        },
        pinTask: (state, { payload }: PayloadAction<string>) => {
            state = {
                tasks: state.tasks.map(task =>
                    task.id === payload ? { ...task, state: "TASK_PINNED" } : task
                ),
            };
        },
    },
})

export const { archiveTask, pinTask } = slice.actions;

const rootReducer = combineReducers({tasks:slice.reducer});
export type RootState = ReturnType<typeof rootReducer>
export const store = configureStore({reducer:rootReducer, middleware: getDefaultMiddleware({serializableCheck: false}), })



// import {PropType} from '../components/TaskList';
// type TaskStateType = 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED'

// // The actions are the "names" of the changes that can happen to the store
// export const actions = {
//   ARCHIVE_TASK: 'ARCHIVE_TASK',
//   PIN_TASK: 'PIN_TASK',
// };

// // The action creators bundle actions with the data required to execute them
// export const archiveTask = (id:string) => ({ type: actions.ARCHIVE_TASK, id });
// export const pinTask = (id:string) => ({ type: actions.PIN_TASK, id });

// // All our reducers simply change the state of a single task.
// function taskStateReducer(taskState:TaskStateType) {
//   return (state:PropType, action:{id:string}) => {
//     return {
//       ...state,
//       tasks: state.tasks.map(task =>
//         task.id === action.id ? { ...task, state: taskState } : task
//       ),
//     };
//   };
// }

// // The reducer describes how the contents of the store change for each action
// export const reducer = (state:PropType, action:{type:TaskStateType,payLoad:{id:string}}) => {
//   switch (action.type) {
//     case actions.ARCHIVE_TASK:
//       return taskStateReducer('TASK_ARCHIVED')(state, action.payLoad);
//     case actions.PIN_TASK:
//       return taskStateReducer('TASK_PINNED')(state, action.payLoad);
//     default:
//       return state;
//   }
// };

// // The initial state of our store when the app loads.
// // Usually you would fetch this from a server
// const defaultTasks = [
//   { id: '1', title: 'Something', state: 'TASK_INBOX' },
//   { id: '2', title: 'Something more', state: 'TASK_INBOX' },
//   { id: '3', title: 'Something else', state: 'TASK_INBOX' },
//   { id: '4', title: 'Something again', state: 'TASK_INBOX' },
// ];

// // We export the constructed redux store
// export default createStore(reducer, { tasks: defaultTasks });