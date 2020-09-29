import React, { FC } from 'react';
import './index.css';
export type TaskState = 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED'
export interface TaskType {
    id: string,
    title: string,
    state: TaskState,
    updatedAt: Date,
}

export interface PropType {
    task: TaskType,
    onArchiveTask: (id: string) => void,
    onPinTask: (id: string) => void,
}

const Task: FC<PropType> = ({ task: { id, title, state }, onPinTask, onArchiveTask }) => {
    return (
        <div className={`list-item ${state}`} >
            <label className="checkbox">
                <input type="checkbox" defaultChecked={state === 'TASK_ARCHIVED'} disabled name="checked" />
                <span className="checkbox-custom" onClick={() => { onArchiveTask(id) }} />
            </label>
            <div className="title">
                <input type="text" value={title} readOnly placeholder='Input title' style={{ textOverflow: 'ellipsis' }} />
            </div>

            <div className="actions" onClick={event => event.stopPropagation()} >
                {state !== 'TASK_ARCHIVED' && (
                    <a href='#/' onClick={(e) => {e.preventDefault() ;onPinTask(id) }} >
                        <span className="icon-star" />
                    </a>
                )}
            </div>
        </div>
    )
}

export default Task;