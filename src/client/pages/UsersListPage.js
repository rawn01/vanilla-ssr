import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id}>{user.name}</li>
            )
        })
    }

    render() {
        return (
            <div>
                Here is a list of users:
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
};

export const loadData = async (store) => {
    return store.dispatch(fetchUsers());
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);