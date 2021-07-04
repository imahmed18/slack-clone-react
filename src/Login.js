import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import "./Login.css"
import { useStateValue } from './StateProvider'
import {actionTypes} from './reducer'

function Login() {
    document.body.style.background="#4a154b";

    const[state, dispatch] = useStateValue();

    const signin= ()=>{
        auth.signInWithPopup(provider)
            .then((result) =>{
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });
                document.body.style.background="white";
            })
            .catch((error) => {
                alert(error.message)
            });

    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_slack-brand-refresh_header-1.png" />
                <div className="login__content">
                    <h1>Sign in to Slack</h1>
                    <p>website</p>
                </div>
                <a onClick={signin}>Sign in with Google</a>

            </div>
            
        </div>
    )
}

export default Login
