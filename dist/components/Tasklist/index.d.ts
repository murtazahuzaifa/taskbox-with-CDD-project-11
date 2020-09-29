import React, { FC } from 'react';

import { TaskType } from '../Task';

import './index.css';

export interface PropType {

    loading?: boolean;

    tasks?: TaskType[];

    onPinTask?: (id: string) => void;

    onArchiveTask?: (id: string) => void;

}

export declare const TaskList: FC<PropType>;

declare const _default: import("react-redux").ConnectedComponent<React.FC<PropType>, Pick<PropType, "loading">>;

export default _default;

