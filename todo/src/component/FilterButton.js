import React from 'react'

function FilterButton(props) {
  return (

      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}
      >
        <li>{props.name}</li>
      </button>





  );
}

export default FilterButton;
