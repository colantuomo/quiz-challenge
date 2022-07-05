import { Questions } from '../../../../services/questions';
import { Button } from '../../../Button/style';
import { Title } from '../../../Typography/styles';
import { ButtonsContainer, QuestionContainer } from './styles';

interface QuestionsWithEvent extends Questions {
  onSelected?: (answer: string) => void;
}

export function Question({
  question,
  answers,
  onSelected,
}: QuestionsWithEvent) {
  return (
    <QuestionContainer>
      <Title>{question}</Title>
      <ButtonsContainer>
        {answers.map((answer, idx) => {
          return (
            <Button key={idx} onClick={() => onSelected && onSelected(answer)}>
              {answer}
            </Button>
          );
        })}
      </ButtonsContainer>
    </QuestionContainer>
  );
}
