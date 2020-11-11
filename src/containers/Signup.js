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
    const { userHasAuthenticated } = useAppContext();

    function signup(email, password) {
        setPending(true);
        setNewUser("test");
        setPending(false);
    }

    function confirm(code) {
        setPending(true);
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