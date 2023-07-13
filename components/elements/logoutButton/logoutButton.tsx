import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { LogoutButtonWrapper } from "./logoutButtonStyles";
import { UserContext } from "../../../context/user";
import { useContext } from "react";

const LogoutButton = () => {
    const { handleUser } = useContext(UserContext);
    const router = useRouter();
    const handleLogout = async () => {
        try {
            await AsyncStorage.setItem('userData', JSON.stringify({}));
            handleUser({});
            router.push('/');
        } catch (e) {
        }
    };

    return <LogoutButtonWrapper activeOpacity={0.6} onPress={handleLogout}>
        <MaterialIcons name="logout" size={30} color="black" />
    </LogoutButtonWrapper>;
};

export default LogoutButton;