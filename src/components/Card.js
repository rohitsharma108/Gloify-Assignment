import React from 'react';
class Card extends React.Component {
    render() {
        return (
    
            <div className=" card w-100 m-5 p-5 " >
            <img className="card-img-top h-75 w-75" src={this.props.image} alt="Card image cap" />
             <div className="card-body">{this.props.email}
               <h5 className="card-title">{this.props.firstName} {this.props.lastName}</h5>
             </div>
          </div>
    
        );
    }
}
export default Card;