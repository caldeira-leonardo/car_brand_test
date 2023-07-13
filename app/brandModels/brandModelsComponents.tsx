import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Brand, BrandModelsContent, BrandModelsWrapper, Title, TitleWrapper } from '../styles/brandModelsStyles';
import BrandModelsCard from './brandModelsCard';
import { View } from '../../components/Themed';
import colors from '../../components/theme/colors';


export interface BrandModelsProps {
    codigo: string;
    nome: string;
}

const BrandModelssComponent = ({ models, modelsYears, brand }: any) => {

    useEffect(() => {
        modelsYears.map((year: any) => console.log('year', year)); //TODO remove log
    }, [modelsYears]);

    useEffect(() => {
        models.map((model: any) => console.log('model', model)); //TODO remove logs
    }, [models]);

    return (
        <BrandModelsWrapper>
            <BrandModelsContent>
                <TitleWrapper>
                    <Title>Marca: </Title>
                    <Brand>{brand}</Brand>
                </TitleWrapper>

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