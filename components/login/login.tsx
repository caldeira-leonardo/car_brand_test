import { useRouter } from "expo-router";
import { postLogin } from "../../services/login";
import LoginComponent from "./loginComponent";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useState } from "react";
import { UserContext } from "../../context/user";

export default function Login() {
    const route = useRouter();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { handleUser } = useContext(UserContext);
    const storeData = async (value: any) => {
        try {
            await AsyncStorage.setItem('userData', JSON.stringify(value));
        } catch (e) {
        }
    };

    const submit = async (data: { user: string, password: string; }) => {

        try {
            setLoading(true);
            const resp = await postLogin(data);
            if (resp?.error === false) {
                const user: {
                    id?: string,
                    name?: string,
                    token?: string;
                } = resp.user;
                storeData(user);
                handleUser(user);
                route.push('/brands');
            }
            if (resp.response.data.error) {
                setErrorMessage(resp.response.data.message);
            }
        }
        catch (e) {
            console.log('error submit', e);
            setLoading(false);
        }
        finally {
            setLoading(false);
        }
    };

    return <LoginComponent {...{ submit, loading, errorMessage }} />;
}

