import React from 'react';
import Task,{PropType, TaskType} from './Task';
import {Story, Meta} from '@storybook/react/types-6-0';

export default {
    title: 'Task',
    component: Task,
    excludeStories: ['task',], // exports that should not render
} as Meta

const Template:Story<PropType> = (args:PropType)=> <Task {...args} />

export const task:TaskType = {
    id: '1',
    title: "Test Task",
    updatedAt: new Date(),
    state: 'TASK_INBOX',
}

export const Default = Template.bind({});
Default.args = {
    task: {
        ...task,
    },
}

export const Pinned = Template.bind({});
Pinned.args = {
    task:{
        ...task,
        state: 'TASK_PINNED',
    }
}

export const Archived = Template.bind({});
Archived.args = {
    task:{
        ...task,
        state: 'TASK_ARCHIVED',
    }
}