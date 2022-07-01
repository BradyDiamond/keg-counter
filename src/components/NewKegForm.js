import React from "react";

function NewKegForm(){
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



    <React.Fragment>
      <h3>This is a form.</h3>
    </React.Fragment>
  );
}

export default NewKegForm;