
import { useState } from "react";
import { ConfirmationButtonWrapper, InputWrapper, LoginContentWrapper, LoginWrapper, LogoWrapper, Title } from "./loginStyles";
import { Logo } from "./loginStyles";
import { useForm } from "react-hook-form";
import { Text } from "../../components/Themed";
import CustomButton from "../../components/elements/Button/Button";
import CustomImput from "../../components/elements/Input/input";
import colors from "../../components/theme/colors";

interface LoginComponentProps {
    submit(data: { user: string, password: string; }): void;
    loading: boolean;
}

export default function LoginComponent({ submit, loading }: LoginComponentProps) {
    const { register, control, handleSubmit,
        formState: { errors }, } = useForm();
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
                    autoCapitalize="none"
                    {...register("user", { required: "Campo Obrigatório.", value: 'teste' })}
                    ref={null}
                />
                {
                    errors['user']?.message &&
                    <Text textColor={colors.colors.error}>{String(errors['password']?.message)}</Text>
                }
            </InputWrapper>
            <InputWrapper>
                <CustomImput
                    label="Password"
                    control={control}
                    autoCapitalize="none"
                    secureTextEntry={showPassword}
                    type="password"
                    onPress={() => setShowPassword((value) => !value)}
                    {...register("password", { required: "Campo Obrigatório.", value: '123' })}
                    ref={null}
                />
                {
                    errors['password']?.message &&
                    <Text textColor={colors.colors.error}>{String(errors['password']?.message)}</Text>
                }
            </InputWrapper>
            <ConfirmationButtonWrapper>
                <CustomButton title="Login" onPress={handleSubmit(onSubmit)} disabled={!!errors['password']?.message} loading={loading} />
            </ConfirmationButtonWrapper>
        </LoginContentWrapper>

    </LoginWrapper >;
};;

