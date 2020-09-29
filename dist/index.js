import React from 'react';

import './index.css';

const Task = ({ task: { id, title, state }, onPinTask, onArchiveTask }) => {

    return (React.createElement("div", { className: `list-item ${state}` },

        React.createElement("label", { className: "checkbox" },

            React.createElement("input", { type: "checkbox", defaultChecked: state === 'TASK_ARCHIVED', disabled: true, name: "checked" }),

            React.createElement("span", { className: "checkbox-custom", onClick: () => { onArchiveTask(id); } })),

        React.createElement("div", { className: "title" },

            React.createElement("input", { type: "text", value: title, readOnly: true, placeholder: 'Input title', style: { textOverflow: 'ellipsis' } })),

        React.createElement("div", { className: "actions", onClick: event => event.stopPropagation() }, state !== 'TASK_ARCHIVED' && (React.createElement("a", { href: '#/', onClick: (e) => { e.preventDefault(); onPinTask(id); } },

            React.createElement("span", { className: "icon-star" }))))));

};

export default Task;

