import React, { useContext } from 'react';
import  firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../../../images/google.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div style={{backgroundColor:"#243b55"}} className="login-page">

      <div className="row align-items-center" style={{ height: "97vh" }}>
        <div className="col-md-8 shadow p-2">
          <div className="from-group mt-5 text-center">
            <button className="btn btn-danger" onClick={handleGoogleSignIn}><FontAwesomeIcon className="icon" icon={faGooglePlusG} />  Google Sign In</button>
          </div>
        </div>
        <div className="col-md-4 d-none d-md-block align-self-end">
          <img src={google} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;