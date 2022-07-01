import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    props.onNewTicketCreation({name: event.target.name.value, locationstyle: event.target.location.value, cost: event.target.issue.value, ounces: event.target.issue.value, id: v4()});
  }


    return (
      <React.Fragment>
        <form onSubmit={handleNewKegFormSubmission}>
          <input
            type='text'
            name='names'
            placeholder='Pair Names' />
          <input
            type='text'
            name='location'
            placeholder='Location' />
          <textarea
            name='issue'
            placeholder='Describe your issue.' />
          <button type='submit'>Help!</button>
        </form>
      </React.Fragment>
    );
  }
  NewKegForm.propTypes = {
    onNewKegCreation: PropTypes.func
  };

export default NewKegForm;