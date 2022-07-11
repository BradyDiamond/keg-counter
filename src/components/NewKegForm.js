import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    props.onNewKegCreation ({name: event.target.name.value, style: event.target.style.value, cost: event.target.cost.value, ounces: 1984, id: v4()
    });
  }


    return (
      <React.Fragment>
        <form onSubmit={handleNewKegFormSubmission}>
          <input
            type='text'
            name='name'
            placeholder='Beer Name' />
          <input
            type='text'
            name='style'
            placeholder='Style' />
          <input
           type='text'
            name='cost'
            placeholder='price' />
          <button type='submit'>ADD</button>
        </form>
      </React.Fragment>
    );
  }
  NewKegForm.propTypes = {
    onNewKegCreation: PropTypes.func
  };

export default NewKegForm;