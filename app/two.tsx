import { StyleSheet, Button } from 'react-native';
import {
  useEffect
} from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const router = useRouter();

  useEffect(() => {
    console.log('router', router); //TODO remove log
  }, [router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/main/two.tsx" />
      <Button title="Botão" onPress={() => router.replace('home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
