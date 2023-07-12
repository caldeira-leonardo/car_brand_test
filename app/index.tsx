import { BackgroundColored, ButtonWrapper, ContentWrapper, HomeWrapper, Logo, LogoWrapper, Subtitle, Title } from './styles/homeStyles';
import CustomButton from '../components/elements/Button/Button';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    console.log('router', router); //TODO remove log
  }, [router]);

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
          <CustomButton title='Login' onPress={() => router.push('/login/login')} fullwidth />
        </ButtonWrapper>
      </ContentWrapper>
    </HomeWrapper>
  );
}
