import styled from "styled-components"
import { Image, ScrollView, TouchableOpacity } from "react-native"
import { SafeView, View, Text } from "../../components/Themed"
import colors from "../../components/theme/colors"

export const BrandsWrapper = styled(SafeView)`
    height: 100%;
`

export const BrandsContentWrapper = styled(View)`
    padding: 0 20px;
`

export const Title = styled(Text)`
    font-size: 30px;
    color: ${colors.colors.text_primary};
`

export const Subtitle = styled(Text)`
    font-size: 18px;
    padding-top: 10px;
    color: ${colors.colors.text_primary};
    padding-bottom: 20px;
`

export const CardBrandWrapper = styled(View)`
    width: 50%;
    align-items: center;
`

export const CardBrandContent = styled(TouchableOpacity)`
    width: 100%;
    align-items: center;
    border: 2px solid #00000030;

    border-radius: 20px;
`

export const DefaultImage = styled(Image)`
    height: 150px;
    max-width: 150px;
    max-height: 150px;
    padding: 15px;
    opacity: 0.4;
`

export const BrandTitle = styled(Text)`
    font-size: 18px;
    color: ${colors.colors.text_primary};
    padding-bottom: 20px;
`
