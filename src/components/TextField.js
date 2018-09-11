import React from 'react';
import {Button, Glyphicon} from "react-bootstrap";

class TextField extends React.Component {
    render() {
        return (
            <div>
                <input type="text"/>
                {this.props.showDelete ? <Button><Glyphicon glyph="remove"/></Button> : null}
            </div>
        );
    }
}
export default TextField;