import type { NextPage } from 'next';
import { FlexRowCenter } from '../styles/globalsStyles';
import { QuizCard } from './components';
import { Beginning } from './components/QuizCard/Contents';

const Home: NextPage = () => {
  return (
    <FlexRowCenter>
      <QuizCard>
        <Beginning />
      </QuizCard>
    </FlexRowCenter>
  );
};

export default Home;
