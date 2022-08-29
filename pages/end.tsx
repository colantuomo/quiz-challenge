import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { FlexRowCenter } from '../styles/globalsStyles';
import { QuizCard } from '../components/QuizCard';
import { End } from '../components/QuizCard/Contents';
import { isClientSide } from '../helpers';
import { getSessionQuizAnswers } from '../helpers/storage';


const EndScreen: NextPage = () => {
  const answers = getSessionQuizAnswers();
  const router = useRouter();
  if (isClientSide && !answers.length) {
    router.push('/');
  }
  return (
    <FlexRowCenter>
      <QuizCard>
        <End answers={answers} />
      </QuizCard>
    </FlexRowCenter>
  );
};

export default EndScreen;
