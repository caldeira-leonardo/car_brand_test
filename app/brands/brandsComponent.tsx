import { BrandTitle, BrandsContentWrapper, BrandsWrapper, CardBrandContent, CardBrandWrapper, DefaultImage, Subtitle, Title } from "../styles/brandsStyles";
import { View, } from "../../components/Themed";
import { FlatList } from 'react-native';
import { useRouter } from "expo-router";
import BrandsCard from "./brandsCard";

interface BrandsComponent {
    user: any;
    brands: BrandProps[];
}

export interface BrandProps {
    codigo: string;
    nome: string;
}

export default function BrandsComponent({ user, brands }: BrandsComponent) {
    const router = useRouter();

    return <BrandsWrapper>
        <BrandsContentWrapper>
            <Title style={{ fontWeight: 'bold' }}>Olá {user?.name}</Title>
            <Subtitle>Aqui você vai encontrar todas as informações sobre veicúlos</Subtitle>
            <FlatList
                data={brands}
                renderItem={({ item, index }: { item: BrandProps; index: number; }) => {
                    return (
                        <BrandsCard {...{ item, index }} />
                    );
                }}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{ height: 10, }} />}
                contentContainerStyle={{ paddingBottom: 130 }}
            />
        </BrandsContentWrapper>
    </BrandsWrapper >;
}
