import styled from "styled-components"
import { Image } from "react-native"
import { View, Text } from "../../components/Themed"
import colors from "../../components/theme/colors"

export const HomeWrapper = styled(View)`
    height: 100%;
    background-color: #f1f1f1;
`

export const BackgroundColored = styled(View)`
    background-color: ${colors.colors.backgroundDark};
    height: 40%;
    border-bottom-left-radius: 130px;
    border-bottom-right-radius: 130px;
    position: relative;
    justify-content: flex-end;
    align-items: center;
`

export const LogoWrapper = styled(View)`
    position: absolute;
    bottom: -80px;
    justify-content: center;
    align-items: center;

    width: 150px;
    height: 150px;
    border-radius: 100px;
    background-color: #fff;
`

export const Logo = styled(Image)`
    height: 100px;
`
export const Title = styled(Text)`
    font-size: 40;
    font-weight: bold;
    color: ${colors.colors.text_primary};
`

export const Subtitle = styled(Text)`
    margin-top: 20;
    color: ${colors.colors.text_primary};
`

export const ContentWrapper = styled(View)`
    background-color: #f1f1f1;
    z-index: -1;
    flex: 1;

    align-items: center;
    padding-top: 100;
`

export const ButtonWrapper = styled(View)`
    margin-top: 70px;
    width: 100%;
    padding: 0 20px;
`
