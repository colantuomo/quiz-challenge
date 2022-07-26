import type { NextPage } from 'next';
import useSWR from 'swr';
import { FlexRowCenter } from '../styles/globalsStyles';
import { QuizCard } from './components';
import { End } from './components/QuizCard/Contents';
import { getSessionQuizID } from './helpers/storage';
import { getQuiz } from './services/questions';

const EndScreen: NextPage = () => {
  const { data } = useSWR(getQuiz(getSessionQuizID() ?? ''));
  return (
    <FlexRowCenter>
      <QuizCard>
        <End quiz={data} />
      </QuizCard>
    </FlexRowCenter>
  );
};

export default EndScreen;
