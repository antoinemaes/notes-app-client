import { Auth } from "aws-amplify";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import SignupForm from '../components/SignupForm';
import onError from "../libs/errorLib";


export default function Signup() {

    const [ isPending, setPending ] = useState(false);
    const history = useHistory();

    return <SignupForm isPending={false}/>;
}