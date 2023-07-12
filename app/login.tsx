
import { useState } from "react";
import { InputWrapper, LoginContentWrapper, LoginWrapper, LogoWrapper, Title } from "./styles/loginStyles";
import { Logo } from "./styles/loginStyles";
import { useForm } from "react-hook-form";
import CustomButton from "../components/elements/Button/Button";
import CustomImput from "../components/elements/Input/input";
import { Text } from "../components/Themed";
import { FontAwesome } from '@expo/vector-icons';

export default function Login() {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    };
    const [showPassword, setShowPassword] = useState(true);


    return <LoginWrapper>
        <LoginContentWrapper>
            <LogoWrapper>
                <Logo source={require('../assets/images/cb_primary.png')} resizeMode='contain' />
                <Title>Cars Brand</Title>
            </LogoWrapper>

            <InputWrapper>
                <CustomImput
                    label="Usuário"
                    control={control}
                    name="usuario"
                />
            </InputWrapper>
            <InputWrapper>

                <CustomImput
                    label="Password"
                    control={control}
                    name="password"
                    secureTextEntry={showPassword}
                    type="password"
                    onPress={() => setShowPassword((value) => !value)}
                />
            </InputWrapper>
            <CustomButton title="Login" onPress={handleSubmit(onSubmit)} />
        </LoginContentWrapper>

    </LoginWrapper>;
};;

