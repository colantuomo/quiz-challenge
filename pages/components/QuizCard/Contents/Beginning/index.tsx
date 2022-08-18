/* eslint-disable react/no-unescaped-entities */
import { Content, ButtonContent } from './styles';
import { Button, Title, Subtitle } from '../../../';
import { useRouter } from 'next/router';
import { useState } from 'react';

export function Beginning() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function startQuiz() {
    setLoading(true);
    router.push('/question');
  }

  return (
    <Content>
      <Title>You're ready to start?</Title>
      <Subtitle>It gonna take just a few minutes</Subtitle>
      <ButtonContent>
        <Button onClick={startQuiz} loading={loading}>
          Start
        </Button>
      </ButtonContent>
    </Content>
  );
}
