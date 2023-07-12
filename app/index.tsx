import { BackgroundColored, ButtonWrapper, ContentWrapper, HomeWrapper, Logo, LogoWrapper, Subtitle, Title } from './styles/homeStyles';
import CustomButton from '../components/elements/Button/Button';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

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
