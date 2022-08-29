/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import { useRouter } from 'next/router';

import { Content, ButtonContent } from './styles';
import { Subtitle, Title } from '../../../Typography/styles';
import { Button } from '../../../Button';

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
