import React, { Component } from "react";
import { Text, View } from "react-native";

import { connect } from "react-redux";

import { fetchUsers } from "../actions";

type Props = {};
class Users extends Component<Props> {

  componentDidMount() {
    this.props.fetchUsers();
  }

  _renderUsers(users) {
    return users.map(user => {
      const { id, name, email } = user;
      return (
        <View key={id}>
          <Text>id: {id} - name: {name} - email: {email}</Text>
        </View>
      )
    });
  }

  render() {
    const { users, loading } = this.props;
    console.log("render:: users", users);

    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text>Users</Text>
        {loading && <Text>Loading</Text>}
        {this._renderUsers(users)}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    loading: state.users.loading
  };
};

export default connect(mapStateToProps, { fetchUsers })(Users);
