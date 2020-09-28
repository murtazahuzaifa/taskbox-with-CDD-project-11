import React, { FC } from 'react';
import TaskList from './TaskList';
// import { connect } from 'react-redux';

export interface PropType { error?: string | null }

export const PureInboxScreen:FC<PropType> = ({ error = null })=> {
    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad" />
                    <div className="title-message">Oh no!</div>
                    <div className="subtitle-message">Something went wrong</div>
                </div>
            </div>
        );
    }

    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">Taskbox</span>
                </h1>
            </nav>
            <TaskList />
        </div>
    );
}

// export default connect<any, any, any>(({ error }) => ({ error }))(PureInboxScreen);