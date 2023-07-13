import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import LogoutButton from '../components/elements/logoutButton/logoutButton';
import { UserProvider } from '../context/user';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (!loaded) SplashScreen.preventAutoHideAsync();
    else SplashScreen.hideAsync();
  }, [loaded]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}

      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {

  return (
    <UserProvider>
      <Stack >
        <Stack.Screen name="index" options={{ headerShown: false, }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="brands" options={{ headerShown: true, headerRight: () => <LogoutButton />, headerLeft: () => <></> }} />
        <Stack.Screen name="models" options={{ headerShown: true, headerRight: () => <LogoutButton /> }} />
      </Stack>
    </UserProvider>
  );
}
