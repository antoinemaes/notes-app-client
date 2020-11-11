import { Auth } from "aws-amplify";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ConfirmationForm from "../components/ConfirmationForm";

import SignupForm from '../components/SignupForm';
import { useAppContext } from "../libs/contextLib";
import onError from "../libs/errorLib";


export default function Signup() {

    const [newUser, setNewUser] = useState(null);
    const [ isPending, setPending ] = useState(false);
    const history = useHistory();

    async function signup(email, password) {

        setPending(true);

        try {
            const newUser = await Auth.signUp({
                username: email,
                password
            });
            setNewUser(newUser);
        } catch (e) {
            onError(e);
        }

        setPending(false);

    }

    async function confirm(code) {

        setPending(true);
        console.log(newUser);

        try {
            await Auth.confirmSignUp(newUser.user.username, code);
            history.push("/login");
        } catch(e) {
            onError(e);
            setPending(false);
        }

    }

    return (
        <div className="Signup">
            {newUser ?
                <ConfirmationForm isPending={isPending} confirm={confirm} />
                : <SignupForm isPending={isPending} signup={signup} />
            }
        </div>
    );
}