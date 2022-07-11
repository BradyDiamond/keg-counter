import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                  formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }


  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handlePour = (id) => {
    const newMainKegList = [...this.state.mainKegList];
    const index = newMainKegList.findIndex(keg => keg.id === id);
    newMainKegList[index]["ounces"] -= 16;
    if(newMainKegList[index]["ounces"] === 0 || isNaN(newMainKegList[index]["ounces"]) ){
      newMainKegList[index]["ounces"] = "empty";
    }
    if (index !== -1) {
      this.setState({mainKegList: [...newMainKegList]});
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onPour={this.handlePour}/>
      buttonText = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to keg List";
    } else {
      currentlyVisibleState = <KegList KegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add A Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default KegControl;