import React from 'react'
import InputField from '../../atoms/Input/InputField'
import Button from '../../atoms/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const FormItem = ({ labelFor, inputValue, onInputChange, placeholder }) => (
  <div className="form-row">
    <InputField 
        value={inputValue} 
        onChange={onInputChange}
        placeholder="New Item.." 
    />
    <Button>
      <FontAwesomeIcon icon={faPlus} />
    </Button>
  </div>
);

export default FormItem;
