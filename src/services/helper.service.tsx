import React from "react";

class HelperService extends React.Component {
    /* Check empty */
    static isEmpty(value: string | Array<string | number | object>) {
        if (value == "") {
            return true;
        }
        if (value.length == 0) {
            return true;
        }
        return false;
    }
}

export default HelperService;
