import { Content, ButtonContent } from './styles';
import { Button, Title, Subtitle } from '../../../';
import { useRouter } from 'next/router';

export function Beginning() {
  const router = useRouter();

  function startQuiz() {
    router.push('/question');
  }

  return (
    <Content>
      <Title>You`re ready to start?</Title>
      <Subtitle>It gonna take just a few minutes</Subtitle>
      <ButtonContent>
        <Button onClick={startQuiz}>Start</Button>
      </ButtonContent>
    </Content>
  );
}
