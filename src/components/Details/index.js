import React from "react";
import { getDetails } from "../../redux/action-creators";
import { connect } from "react-redux";

class Details extends React.Component {
  componentDidMount() {
    this.props.getData(this.props.match.params.id);
  }

  render() {
    const { details: { data } } = this.props;
    console.log("data", data)
    return (
      <div>
        {data && (
          <React.Fragment>
            <div>{`name: ${data.login}`}</div>
            <div>{`location: ${data.location}`}</div>
            <div>{`following: ${data.following}`}</div>
            <div>{`followers: ${data.followers}`}</div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    details: state.details
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: id => {
      dispatch(getDetails(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
