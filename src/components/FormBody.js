import React from 'react';
import {inputFieldTypes} from "./FieldTypes";
import FormTextField from "./FormTextField";
import shortid from 'shortid';
import FormDatePickerField from "./FormDatePickerField";
class FormBody extends React.Component {
    render() {
        const {showDelete, ...others} = this.props;
        return (
            <div>
                {this.props.fields.map((field,index)=>{
                    switch (field.type) {
                        case inputFieldTypes.TextField:
                            return <FormTextField key={shortid.generate()} id={field.id} showDelete={showDelete} {...others}/>;
                        case inputFieldTypes.DatePickerField:
                            return <FormDatePickerField key={shortid.generate()} id={field.id} showDelete={showDelete} {...others}/>
                    }
                })}
            </div>
        );
    }
}
export default FormBody;