import React from "react";
import LoggerService from "services/logger.service";

function index() {
    LoggerService.error("hello", { a: 1 });
    return (
        <div className="Home">
            <header className="App-header">
                <img
                    src={"https://i.pinimg.com/564x/d1/d0/7d/d1d07dcc79c9d75288846abafbb427ec.jpg"}
                    className="App-logo"
                    alt="logo"
                />
                <p>
                    <code>I'm Minh Tan</code>
                </p>
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn Reacts 1 2 3
                </a>
            </header>
        </div>
    );
}

export default index;
