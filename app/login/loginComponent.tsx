
import { useState } from "react";
import { InputWrapper, LoginContentWrapper, LoginWrapper, LogoWrapper, Title } from "./../styles/loginStyles";
import { Logo } from "./../styles/loginStyles";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/elements/Button/Button";
import CustomImput from "../../components/elements/Input/input";
import { useRouter } from "expo-router";

interface LoginComponentProps {
    submit(data: { user: string, password: string; }): void;
}

export default function LoginComponent({ submit }: LoginComponentProps) {
    const { control, handleSubmit } = useForm();
    const route = useRouter();
    const onSubmit = (data: any) => {
        submit(data);
    };
    const [showPassword, setShowPassword] = useState(true);

    return <LoginWrapper>
        <LoginContentWrapper>
            <LogoWrapper>
                <Logo source={require('../../assets/images/cb_primary.png')} resizeMode='contain' />
                <Title>Cars Brand</Title>
            </LogoWrapper>

            <InputWrapper>
                <CustomImput
                    label="Usuário"
                    control={control}
                    name="user"
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

