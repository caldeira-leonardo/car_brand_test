import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Brand, BrandModelsContent, BrandModelsWrapper, Title, TitleWrapper } from './brandModelsStyles';
import BrandModelsCard from './brandModelsCard';
import { View } from '../../components/Themed';
import colors from '../../components/theme/colors';
import LogoutButton from '../elements/logoutButton/logoutButton';


export interface BrandModelsProps {
    codigo: string;
    nome: string;
}

const BrandModelssComponent = ({ models, brand, user }: any) => {

    return (
        <BrandModelsWrapper>
            <BrandModelsContent>
                <TitleWrapper>
                    <Title>{user?.name}, você escolheu a marca: </Title>
                    <Brand>{brand}</Brand>
                </TitleWrapper>

                <Title>modelos dos carros: </Title>

                <FlatList
                    data={models}
                    renderItem={({ item }: { item: BrandModelsProps; }) => {
                        return (
                            <BrandModelsCard {...{ item }} />
                        );
                    }}
                    ItemSeparatorComponent={() => <View style={{ height: 10, backgroundColor: colors.colors.lightSmooth }} />}
                />
            </BrandModelsContent>
        </BrandModelsWrapper>
    );
};

export default BrandModelssComponent;