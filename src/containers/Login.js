import { Auth } from "aws-amplify";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import LoginForm from '../components/LoginForm';
import { useAppContext } from "../libs/contextLib";
import onError from "../libs/errorLib";


export default function Login() {

    const [ isPending, setPending ] = useState(false);
    const { userHasAuthenticated } = useAppContext();
    const history = useHistory();

    async function login(email, password) {
        setPending(true);
        try {
            await Auth.signIn(email, password);
            userHasAuthenticated(true);
            history.push("/");
        } catch (e) {
            setPending(false);
            onError(e);
        }
    }

    return <LoginForm login={login} isPending={isPending}/>;
}