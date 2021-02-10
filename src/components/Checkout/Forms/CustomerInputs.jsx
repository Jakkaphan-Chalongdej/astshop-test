import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../UI/Input/InputField';

const customerInputs = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <input
                    label={'First Name'}
                    type={'text'}
                    placeholder={'First Name'}
                    
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <input
                    label={'Second Name'}
                    type={'text'}
                    placeholder={'Second Name'}
                    
                   />
                </div>
            </div>

            <div className="mb-3">
                <input
                    label={'Email'}
                    type={'email'}
                    placeholder={'you@example.com'}
                    
                   />

            </div>
        </React.Fragment>
    )
};

customerInputs.propTypes = {
    inputChanged: PropTypes.func.isRequired,
    customerInfo: PropTypes.object.isRequired,
};

export default customerInputs;