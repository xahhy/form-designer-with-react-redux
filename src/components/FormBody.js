import React from 'react';

class FormBody extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
export default FormBody;