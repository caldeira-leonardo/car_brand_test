import styled from "styled-components"
import { Image } from "react-native"
import { View, Text, SafeView } from "../../components/Themed"
import colors from "../../components/theme/colors"

export const LoginWrapper = styled(SafeView)`
    height: 100%;
    background-color: ${colors.colors.lightSmooth};
`

export const LoginContentWrapper = styled(View)`
    padding: 0 20px;
    flex: 1;
    background-color: transparent;
    justify-content: center;
`

export const LogoWrapper = styled(View)`
    margin-top: -50px;
    margin-bottom: 50px;
    background-color: transparent;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Logo = styled(Image)`
    height: 50px;
    width: 45px;
    margin-right: 20px;
`

export const Title = styled(Text)`
    font-size: 30px;
    font-weight: bold;
    color: ${colors.colors.primary};
    text-shadow: 1px 1px 1px #00000090;
`

export const InputWrapper = styled(View)`
    background-color: transparent;
    padding-bottom: 20px;
`

export const ConfirmationButtonWrapper = styled(View)`
    background-color: transparent;
    padding-top: 20px;
`
