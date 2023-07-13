import { BackgroundColored, ButtonWrapper, ContentWrapper, HomeWrapper, Logo, LogoWrapper, Subtitle, Title } from './styles/homeStyles';
import CustomButton from '../components/elements/Button/Button';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const router = useRouter();

  const getUser = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      const newUser = JSON.parse(String(userData));
      if (newUser.id) {
        router.push('/brands');
      }
    } catch (e) {
      console.log('Error Brands getUser', e);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getUser();
    }, 1000);
  }, []);

  return (
    <HomeWrapper>
      <BackgroundColored>
        <LogoWrapper>
          <Logo source={require('../assets/images/cb_primary.png')} resizeMode='contain' />
        </LogoWrapper>
      </BackgroundColored>

      <ContentWrapper>
        <Title>Cars Brand</Title>
        <Subtitle>Seu aplicativo de verificação de veiculos</Subtitle>

        <ButtonWrapper>
          <CustomButton title='Login' onPress={() => router.push('/login')} fullwidth />
        </ButtonWrapper>
      </ContentWrapper>
    </HomeWrapper>
  );
}
