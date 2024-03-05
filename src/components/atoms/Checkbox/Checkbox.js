import React from 'react';

const Checkbox = ({ checked, onChange }) => (
  <div class="check-delete">
  <input type="checkbox" checked={checked} onChange={onChange} />
  </div>
)

export default Checkbox