import type { NextPage } from 'next';
import { FlexRowCenter } from '../styles/globalsStyles';
import { QuizCard } from './components';
import { End } from './components/QuizCard/Contents';
import { getSessionQuizAnswers } from './helpers/storage';

const EndScreen: NextPage = () => {
  const answers = getSessionQuizAnswers();
  return (
    <FlexRowCenter>
      <QuizCard>
        <End answers={answers} />
      </QuizCard>
    </FlexRowCenter>
  );
};

export default EndScreen;
