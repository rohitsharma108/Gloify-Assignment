import React from 'react';
import UsersList from './UsersList';
import { connect } from 'react-redux';
import {usersData, userData} from '../actions';
import Spinner from './Spinner';
import UserCard from './UserCard';


class UserDetail extends React.Component {
    componentDidMount() {
        console.log("id is",this.props.match.params.id);
        this.props.userData(this.props.match.params.id);
    }

    render() {
        console.log("useris", this.props.user);
      
                
        if (!this.props.user)
        {
            return (
                <div className="d-flex justify-content-center align-items-center min-vh-100">
                    <Spinner />
                </div>
            )
        }
        
    
             return (
                 <div className="card w-10">
                     <UserCard firstName= {this.props.user.first_name} lastName= {this.props.user.last_name} email= {this.props.user.email} image= {this.props.user.avatar} />
                

                 </div>
             );
   
    }
}    
          

const mapStateToProps = (state,ownProps) => {
    console.log("state of userdetail is", state)
    return { user: state.fetched[ownProps.match.params.id]}
   
    

}

export default connect(mapStateToProps,{userData})(UserDetail);
