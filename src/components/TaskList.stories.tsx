import React from 'react';
import {TaskList, PropType } from './TaskList';
import { TaskType } from './Task';
import * as TaskStories from './Task.stories';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
    title:  'Task List',
    component: TaskList,
    excludeStories: ['WithPinnedTasksArgs', "tasks", ],
    decorators: [story => <div style={{ padding: '3rem' }} >{story()}</div>],
} as Meta

const Template:Story<PropType> = (args:PropType)=> <TaskList {...args} />

export const tasks:TaskType[] = [
    { ...TaskStories.task, id: '1', title: 'Task 1' },
    { ...TaskStories.task, id: '2', title: 'Task 2' },
    { ...TaskStories.task, id: '3', title: 'Task 3' },
    { ...TaskStories.task, id: '4', title: 'Task 4' },
    { ...TaskStories.task, id: '5', title: 'Task 5' },
    { ...TaskStories.task, id: '6', title: 'Task 6' },
  ]

export const Default = Template.bind({});
Default.args = {
    tasks: [...tasks]
}

export const WithPinnedTasks = Template.bind({});
export const WithPinnedTasksArgs:PropType = {
    tasks: [
      ...tasks.slice(0, 5),
      { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED', updatedAt: new Date() },
    ],
  loading: false,
}; 
WithPinnedTasks.args = {
    ...WithPinnedTasksArgs
  } 

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};