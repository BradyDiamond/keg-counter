import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    props.onNewTicketCreation({name: event.target.name.value, style: event.target.location.value, cost: event.target.issue.value, ounces: event.target.issue.value, id: v4()});
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