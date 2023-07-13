import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { LogoutButtonWrapper } from "./logoutButtonStyles";

const LogoutButton = () => {
    const router = useRouter();
    const handleLogout = async () => {
        try {
            await AsyncStorage.setItem('userData', JSON.stringify({}));
            router.push('/');
        } catch (e) {
        }
    };

    return <LogoutButtonWrapper activeOpacity={0.6} onPress={handleLogout}>
        <MaterialIcons name="logout" size={30} color="black" />
    </LogoutButtonWrapper>;
};

export default LogoutButton;