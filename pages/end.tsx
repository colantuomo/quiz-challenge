import type { NextPage } from 'next';
import { FlexRowCenter } from '../styles/globalsStyles';
import { QuizCard } from './components';
import { End } from './components/QuizCard/Contents';

const EndScreen: NextPage = () => {
  return (
    <FlexRowCenter>
      <QuizCard>
        <End />
      </QuizCard>
    </FlexRowCenter>
  );
};

export default EndScreen;
