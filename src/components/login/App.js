import React, { Component} from "react";
import "./App.css";
import { bindActionCreators } from "redux";

 import { connect} from 'react-redux';
 import { withRouter } from 'react-router-dom';
import * as profileAction from '../../store/profile/profile.action'
class App extends Component{

  constructor(props)
  {
    super(props)
  
    var temp = props;
  }

  static getDerivedStateFromProps(nextProps, prevState)
  { 
    if (prevState != null && nextProps.user.isLoggedIn) {
      return nextProps
    }
    return null;


  }

  componentDidMount()
  {
 
    this.props.login({  userName:"Test UserName",
    nickName:"Test",
    isLoggedIn:true,
    mailId:"username@gmail.com",
    token:""})
  }

  render(){
    return(
      <div className="App">
        <h1> Hello, Worlds!  </h1>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
      user: state.profileReducer.userInfo
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
      Object.assign({},
        profileAction),
      dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

//export default App;
