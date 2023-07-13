import { useRouter } from "expo-router";
import { BrandTitle, CardBrandContent, CardBrandWrapper, DefaultImage } from "../styles/brandsStyles";
import { BrandProps } from "./brandsComponent";

const BrandCard = ({ item, index }: { item: BrandProps; index: number; }) => {
    const router = useRouter();
    return (
        <CardBrandWrapper
            key={item?.codigo}
            style={{ paddingRight: index % 2 === 0 ? 5 : 0, paddingLeft: index % 2 !== 0 ? 5 : 0 }}
        >
            <CardBrandContent
                activeOpacity={0.7}
                onPress={() => {
                    router.push({
                        pathname: "/brandModels/brandModels", params: {
                            nome: item.nome,
                            codigo: item.codigo
                        }
                    });
                }}
            >
                <DefaultImage source={require('../../assets/images/lamb.png')} resizeMode='contain' />
                <BrandTitle>{item?.nome}</BrandTitle>
            </CardBrandContent>
        </CardBrandWrapper>
    );
};

export default BrandCard;