import { postLogin } from "../../services/login";
import LoginComponent from "./loginComponent";

export default function Login() {
    const submit = async (data: { user: string, password: string; }) => {
        console.log('data container', data); //TODO remove logs       
        let resp;
        try {
            resp = postLogin(data);
        }
        catch (e) {
            console.log('error updating', e);
        }
        finally {
            console.log('resp', resp); //TODO remove logs
        }
    };

    return <LoginComponent {...{ submit }} />;
}

