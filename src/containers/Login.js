import LoginForm from './LoginForm';
import { Auth } from "aws-amplify";

async function login(email, password) {
    try {
        await Auth.signIn(email, password);
        alert("Logged in");
    } catch (e) {
        alert(e.message);
    }
}

export default () => (
    <LoginForm login={login} />
);