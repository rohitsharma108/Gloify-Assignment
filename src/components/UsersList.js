import React from 'react';
import { connect } from 'react-redux';
import {usersData, userData} from '../actions';
import Spinner from './Spinner';
import Card from './Card';
import history from '../history';
import Sort from './Sort';
import Header from './Header';

class UsersList extends React.Component {
    state = { users : [],
        initialUsers : []
    }
    componentDidMount() {
        
        this.props.usersData();

        
    }
    

    onCardClick = (id) => {
        console.log("oncardclicLICK with id",id)
        history.push(`/${id}`);


        
    }
    sortByFirstName(a,b){
        if(a.first_name < b.first_name) { return -1; }
        if(a.first_name > b.first_name) { return 1; }
        return 0;
    }
    
    
    sortByLastName(a,b) {
        if(a.last_name < b.last_name) { return -1; }
        if(a.last_name > b.last_name) { return 1; }
        return 0;
    };
    
    onSortClick = (ele) => {
        if(ele =="firstName"){
            this.setState({
                users : this.state.users.sort(this.sortByFirstName),
                initialUsers : this.state.initialUsers
            })

        }
        else if(ele =="lastName"){
            this.setState({
                users : this.state.users.sort(this.sortByLastName),
                initialUsers : this.state.initialUsers
            })
            

            
        }
        else if(ele =="none"){
            console.log("none users",this.props.users)
            this.setState({
                users : this.state.initialUsers,
                initialUsers : this.state.initialUsers
            })
        }
        console.log("onSortclick",ele)
    }




    render() {
        console.log("props user",this.props.users)


        if (!this.props.users || this.props.users.length===0)
        {
            
            return (
                <div className="d-flex justify-content-center align-items-center min-vh-100">
                    <Spinner />
                </div>
            )
        }
        if(this.state.users.length == 0){
            this.setState({
                users: this.props.users,
                initialUsers: [...this.props.users]
                
           })
            
        }
        return(
            <>
            <Header />
        
            <Sort sortBy = {(ele) => this.onSortClick(ele) }/>

        <div className="d-flex flex-row m-5 p-5 flex-wrap ">
        {this.state.users.map((user)=>{

            return (

                <span onClick = {()=>this.onCardClick(user.id)}>
                    
            
                <Card firstName= {user.first_name} lastName= {user.last_name} image= {user.avatar}  />
                
             {/* <h1 key={user.id}> {user.email}</h1> */}
              </span>
            );
        })}
        </div>
        </>
        )
    }
    
// }
   
}

const mapStateToProps = (state) => {
   
    const users = Object.values(state.fetched);
    console.log("the usersis",users)
    return {
        users: users
    }

}

export default connect(mapStateToProps,{usersData})(UsersList);