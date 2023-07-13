import styled from "styled-components"
import { Image, ScrollView, TouchableOpacity } from "react-native"
import { SafeView, View, Text } from "../../components/Themed"
import colors from "../../components/theme/colors"

export const BrandModelsWrapper = styled(SafeView)`
    height: 100%;
`

export const BrandModelsContent = styled(View)`
    height: 100%;
    padding: 0 20px;
`

export const TitleWrapper = styled(View)`
    flex-direction: row;
    align-items: flex-end;
`

export const Title = styled(Text)`
    font-size: 18px;
    color: ${colors.colors.text_primary};
    margin-bottom: 4px;
`

export const Brand = styled(Text)`
    font-size: 30px;
    color: ${colors.colors.text_primary};
`
