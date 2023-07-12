import { Text, SafeView } from "../components/Themed";

import { useState } from "react";
import { Link } from "expo-router";
import { Pressable } from 'react-native';
import CustomImput from "../components/elements/Input/input";


export default function Login() {
    const [teste, setTeste] = useState('');

    return <SafeView>

        <Link href="/index" asChild>
            <Pressable>
                {({ pressed }) => (
                    <Text
                        style={{ fontSize: 50, opacity: pressed ? 0.5 : 1 }}
                    >
                        Sign to you Account
                    </Text>
                )}
            </Pressable>
        </Link>
        <CustomImput
            label="teste label"
            value={teste}
            onChangeText={e => setTeste(e)}
        />

    </SafeView>;
};;

