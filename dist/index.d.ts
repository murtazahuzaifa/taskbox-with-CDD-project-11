import { FC } from 'react';

import './index.css';

export declare type TaskState = 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';

export interface TaskType {

    id: string;

    title: string;

    state: TaskState;

    updatedAt: Date;

}

export interface PropType {

    task: TaskType;

    onArchiveTask: (id: string) => void;

    onPinTask: (id: string) => void;

}

declare const Task: FC<PropType>;

export default Task;

