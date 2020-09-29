import React from 'react';

import Task from '../Task';

import { connect } from 'react-redux';

import './index.css';

import { archiveTask, pinTask } from '../../lib/redux';

const mockFunc = (id) => { };

const LoadingRow = (React.createElement("div", { className: "loading-item" },

    React.createElement("span", { className: "glow-checkbox" }),

    React.createElement("span", { className: "glow-text" },

        React.createElement("span", null, "Loading"),

        " ",

        React.createElement("span", null, "cool"),

        " ",

        React.createElement("span", null, "state"))));

export const TaskList = ({ loading = false, tasks = [], onPinTask = mockFunc, onArchiveTask = mockFunc }) => {

    if (loading) {

        return (React.createElement("div", { className: "list-items" },

            LoadingRow,

            LoadingRow,

            LoadingRow,

            LoadingRow,

            LoadingRow,

            LoadingRow));

    }

    if ((tasks === null || tasks === void 0 ? void 0 : tasks.length) === 0) {

        return (React.createElement("div", { className: "list-items" },

            React.createElement("div", { className: "wrapper-message" },

                React.createElement("span", { className: "icon-check" }),

                React.createElement("div", { className: "title-message" }, "You have no tasks"),

                React.createElement("div", { className: "subtitle-message" }, "Sit back and relax"))));

    }

    const tasksInOrder = [

        ...tasks.filter((t) => t.state === 'TASK_PINNED'),

        ...tasks.filter((t) => t.state !== 'TASK_PINNED'),

    ];

    return (React.createElement("div", { className: "list-items" }, tasksInOrder.map((task) => (React.createElement(Task, { key: task.id, task: task, onPinTask: onPinTask, onArchiveTask: onArchiveTask })))));

};

const mapStateToProps = (state) => {

    return {

        tasks: state.tasks.tasks.filter((t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),

    };

};

const connector = connect(mapStateToProps, (dispatch) => {

    return {

        onArchiveTask: (id) => dispatch(archiveTask(id)),

        onPinTask: (id) => dispatch(pinTask(id)),

    };

});

export default connector(TaskList);

connect();

