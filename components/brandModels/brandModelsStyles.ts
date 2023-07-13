import styled from "styled-components"
import { Image } from "react-native"
import { SafeView, View, Text } from "../../components/Themed"
import colors from "../../components/theme/colors"

export const BrandModelsWrapper = styled(SafeView)`
    height: 100%;
    background-color: ${colors.colors.lightSmooth};
`

export const BrandModelsContent = styled(View)`
    height: 100%;
    padding: 0 20px;
    background-color: ${colors.colors.lightSmooth};
`

export const TitleWrapper = styled(View)`
    position: relative;
    background-color: ${colors.colors.lightSmooth};
    flex-direction: row;
    align-items: flex-end;
    margin: 20px 0;
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

export const CardBrandModelsWrapper = styled(View)`
    border: 2px solid #00000010;
    padding: 10px;
    background-color: ${colors.colors.light};
    border-radius: 6px;
`

export const CardBrandModelsContent = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    background-color: ${colors.colors.light};
    padding-bottom: 10px;
`

export const CardBrandModelsInfosWrapper = styled(View)`
    background-color: ${colors.colors.light};
`

export const DefaultCardModelsImage = styled(Image)`
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    padding: 15px;
`

export const CardBrandModelName = styled(Text)`
    font-size: 20px;
    color: ${colors.colors.text_primary};
`

export const CardTypeInfo = styled(Text)`
    font-size: 20px;
    color: ${colors.colors.text_primary};
`

export const CardTypeInfoDetail = styled(Text)`
    font-size: 20px;
    color: ${colors.colors.text_primary};
    font-weight: bold;
`

export const CardInfosLine = styled(Text)`
    flex-direction: row;
`
