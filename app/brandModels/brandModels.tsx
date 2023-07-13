import React, { useEffect, useState } from 'react';
import BrandModelssComponent from './brandModelsComponents';
import { useLocalSearchParams } from 'expo-router';
import { getModelsByBrandData } from '../../services/brands';

const Model = () => {
    const params = useLocalSearchParams();
    const [models, setModels] = useState([]);
    const [modelsYears, setModelsYears] = useState([]);
    const brand = params.nome;

    const getModels = async () => {
        try {
            if (params.codigo) {
                const modelsData = await getModelsByBrandData(String(params?.codigo));
                setModelsYears(Object.values(modelsData['anos']));
                setModels(Object.values(modelsData['modelos']));
            }
        }
        catch (e) {
            console.log('error updating', e);
        }
        finally {
        }
    };

    useEffect(() => {
        getModels();
    }, []);

    return < BrandModelssComponent {...{ models, modelsYears, brand }} />;

};

export default Model;