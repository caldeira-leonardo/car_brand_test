import React, { useEffect } from 'react';
import { Text } from '../../components/Themed';
import { Brand, BrandModelsContent, BrandModelsWrapper, Title, TitleWrapper } from '../styles/brandModelsStyles';

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
                <Text>BrandModelssComponent</Text>
            </BrandModelsContent>
        </BrandModelsWrapper>
    );
};

export default BrandModelssComponent;