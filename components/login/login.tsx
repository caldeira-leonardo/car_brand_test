import { useRouter } from "expo-router";
import { postLogin } from "../../services/login";
import LoginComponent from "./loginComponent";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";

export default function Login() {
    const route = useRouter();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
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
                const user = resp.user;
                storeData(user);
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

