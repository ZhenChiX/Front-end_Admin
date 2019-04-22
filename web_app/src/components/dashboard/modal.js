import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";

class Profile extends Component {
  state = {
    profileModal: true
  };

  handleProfileOpen = () => {
    this.setState({ profileModal: true });
  };

  handleClose = () => {
    this.setState({ profileModal: false });
  };

  render() {
    return (
      <Modal
        open={this.state.profileModal}
        // onClick={this.handleProfileOpen}
        onClose={this.handleClose}
      >
        <Card>
          <div>
            <h4>Profile</h4>
            <span>User</span>
          </div>
        </Card>
      </Modal>
    );
  }
}

export default Profile;
