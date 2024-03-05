import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DeleteButton = ({ icon, onClick }) => (
    <div className="button" data-button-type="button-delete" onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </div>
)

export default DeleteButton
