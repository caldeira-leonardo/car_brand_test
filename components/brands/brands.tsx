import BrandsComponent, { BrandProps } from "./brandsComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useMemo, useState } from "react";
import { getBrandsData } from "../../services/brands";

export default function Brands() {
    const [user, setUser] = useState('');
    const [brands, setBrands] = useState<BrandProps[]>([]);
    const getUser = async () => {
        try {
            const newUser = await AsyncStorage.getItem('userData');
            setUser(JSON.parse(String(newUser)));
        } catch (e) {
        }
    };

    const getBrands = async () => {
        try {
            const brandsData = await getBrandsData();
            setBrands(brandsData);
        }
        catch (e) {
            console.log('error updating', e);
        }
        finally {
        }
    };

    useEffect(() => {
        getUser();
        getBrands();
    }, []);

    return <BrandsComponent {...{ user, brands }} />;
}
