import { BrandsContentWrapper, BrandsWrapper, Subtitle, Title } from "./brandsStyles";
import { View, } from "../../components/Themed";
import { FlatList } from 'react-native';
import BrandsCard from "./brandsCard";
import colors from "../theme/colors";

interface BrandsComponent {
    user: any;
    brands: BrandProps[];
}

export interface BrandProps {
    codigo: string;
    nome: string;
}

export default function BrandsComponent({ user, brands }: BrandsComponent) {
    return <BrandsWrapper>
        <BrandsContentWrapper>
            <Title style={{ fontWeight: 'bold' }}>Olá, {user?.name}</Title>
            <Subtitle>Aqui você vai encontrar todas as informações sobre veicúlos</Subtitle>

            <FlatList
                data={brands}
                renderItem={({ item, index }: { item: BrandProps; index: number; }) => {
                    return (
                        <BrandsCard {...{ item, index }} />
                    );
                }}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{ height: 10, backgroundColor: colors.colors.lightSmooth }} />}
                contentContainerStyle={{ paddingBottom: 130 }}
            />
        </BrandsContentWrapper>
    </BrandsWrapper >;
}
