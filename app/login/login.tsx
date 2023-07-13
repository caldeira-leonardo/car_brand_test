import { useRouter } from "expo-router";
import { postLogin } from "../../services/login";
import LoginComponent from "./loginComponent";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";

export default function Login() {
    const route = useRouter();
    const [loading, setLoading] = useState(false);
    const storeData = async (value: any) => {
        try {
            await AsyncStorage.setItem('userData', JSON.stringify(value));
        } catch (e) {
        }
    };

    const submit = async (data: { user: string, password: string; }) => {
        let resp;
        try {
            setLoading(true);
            resp = await postLogin(data);
            if (resp?.error === false) {
                const user = resp.user;
                storeData(user);
            }
        }
        catch (e) {
            console.log('error updating', e);
        }
        finally {
            route.push('/brands/brands');
            setLoading(false);
        }
    };

    return <LoginComponent {...{ submit, loading }} />;
}

