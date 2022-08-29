import type { NextPage } from 'next';
import { QuizCard } from '../components/QuizCard';
import { Beginning } from '../components/QuizCard/Contents';
import { FlexRowCenter } from '../styles/globalsStyles';

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
