import {
    CardBrandModelName,
    CardBrandModelsContent,
    CardBrandModelsInfosWrapper,
    CardBrandModelsWrapper,
    CardInfosLine,
    CardTypeInfo,
    CardTypeInfoDetail,
    DefaultCardModelsImage
} from "./brandModelsStyles";
import { BrandModelsProps } from "./brandModelsComponents";

const BrandModelsCard = ({ item }: { item: BrandModelsProps; }) => {

    return (
        <CardBrandModelsWrapper>
            <CardBrandModelsContent>
                <CardBrandModelsInfosWrapper>
                    <CardInfosLine>
                        <CardTypeInfo>Ano: </CardTypeInfo>
                        <CardTypeInfoDetail>XXXX</CardTypeInfoDetail>
                    </CardInfosLine>
                    <CardInfosLine>
                        <CardTypeInfo>Potência: </CardTypeInfo>
                        <CardTypeInfoDetail>X.X</CardTypeInfoDetail>
                    </CardInfosLine>
                    <CardInfosLine>
                        <CardTypeInfo>Câmbio: </CardTypeInfo>
                        <CardTypeInfoDetail>Manual</CardTypeInfoDetail>
                    </CardInfosLine>
                </CardBrandModelsInfosWrapper>
                <DefaultCardModelsImage source={require('../../assets/images/lamb.png')} resizeMode='contain' />
            </CardBrandModelsContent>
            <CardBrandModelName numberOfLines={1}>{item.nome}</CardBrandModelName>
        </CardBrandModelsWrapper>
    );
};

export default BrandModelsCard;;