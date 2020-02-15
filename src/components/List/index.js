import React from "react";
import { connect } from "react-redux";
import { getList } from "../../redux/action-creators";

class List extends React.Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { list } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {list.data.map((user, index) => {
            return (
              <tr
                key={index}
                onClick={() => {
                  this.props.history.push(`/user/${user.login}`);
                }}
              >
                <td>{user.id}</td>
                <td>{user.login}</td>
                <td>
                  <img src={user.avatar_url} alt={`image for ${user.login}`} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.userList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      dispatch(getList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
