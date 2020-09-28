import React from 'react';
import { PureInboxScreen, PropType } from './InboxScreen';
import { Story, Meta } from '@storybook/react/types-6-0';
// import { action } from '@storybook/addon-actions';
// import * as TaskListStories from './TaskList.stories';
import { Provider } from 'react-redux';
import {store} from '../lib/redux';

// const store = {
//     getState: () => ({
//         tasks: TaskListStories.Default.args?.tasks
//     }),
//     subscribe: () => 0,
//     dispatch: action('dispatch'),
//     replaceReducer: ()=> {console.log('hello')},
// }

export default {
    title: 'InboxScreen',
    component: PureInboxScreen,
    decorators: [story => <Provider store={store}>{story()}</Provider>],
} as Meta

const Template: Story<PropType> = (args: PropType) => <PureInboxScreen {...args} />

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
    error: 'Something',
};