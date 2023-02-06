import React from "react";

/* Date now */
const getTime = () => {
    const date = new Date();
    return `${date.getDate()}/${
        date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
};

class LoggerService extends React.Component {
    /* Logger debug */
    static debug(message: string, content: object | number | string) {
        console.debug(`[${getTime()}-[DEBUG]: ${message} \n`, JSON.stringify(content, null, 3));
    }

    /* Logger debug */
    static info(message: string) {
        console.info(`[${getTime()}-[INFO]: \n${message}`);
    }

    /* Logger debug */
    static error(message: string, content: object | number | string) {
        console.error(`[${getTime()}-[ERROR]: ${message} \n`, JSON.stringify(content, null, 3));
    }
}

export default LoggerService;
