import React, { FC } from 'react';
import Task, { TaskType } from './Task';
import { connect } from 'react-redux';
import { archiveTask, pinTask, RootState } from '../lib/redux';

export interface PropType {
    loading?: boolean;
    tasks?: TaskType[];
    onPinTask?: (id: string) => void;
    onArchiveTask?: (id: string) => void;
}
const mockFunc=(id:string)=>{}

const LoadingRow = (
    <div className="loading-item">
        <span className="glow-checkbox" />
        <span className="glow-text">
            <span>Loading</span> <span>cool</span> <span>state</span>
        </span>
    </div>
);

export const TaskList: FC<PropType> = ({ loading = false, tasks=[], onPinTask=mockFunc, onArchiveTask=mockFunc }) => {
    if (loading) {
        return (
            <div className="list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }
    if (tasks?.length === 0 ) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>)
    }
    
    const tasksInOrder = [
        ...tasks.filter((t: any) => t.state === 'TASK_PINNED'),
        ...tasks.filter((t: any) => t.state !== 'TASK_PINNED'),
    ]
    return (
        <div className="list-items" >
            {tasksInOrder.map((task: TaskType) => (
                <Task key={task.id} task={task} onPinTask={onPinTask} onArchiveTask={onArchiveTask} />
            ))}
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        tasks: state.tasks.tasks.filter((t: TaskType) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
    }
}
const connector = connect(
    mapStateToProps,
    (dispatch) => {
        return {
            onArchiveTask: (id: string) => dispatch(archiveTask(id)),
            onPinTask: (id: string) => dispatch(pinTask(id)),
        }
    }
);
export default connector(TaskList)
connect()