import React from 'react';

class Sort extends React.Component {
    state = {
      isOpen: false,
      sortValue : "none"
    };
    
  
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
    updateSortValue = (ele,value) =>{

        ele.stopPropagation();
        this.props.sortBy(value)

    }
  
    render() {
      const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
      return (
        <div className="dropdown" onClick={this.toggleOpen}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            Sort By
          </button>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
        
            <a 
            onClick =  {(ele) => this.updateSortValue(ele,"firstName")}
            className="dropdown-item" href="#">
              First Name
            </a>
            <a  onClick =  {(ele) => this.updateSortValue(ele,"lastName")} className="dropdown-item" href="#">
              Last Name
            </a>
            <a  onClick =  {(ele) => this.updateSortValue(ele,"none")} className="dropdown-item" href="#">
              None
            </a>
          </div>
        </div>
      );
    }
  }
  



export default Sort;