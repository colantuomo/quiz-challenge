import { Card } from './styles';

interface Props {
  children: React.ReactNode;
}

export function QuizCard({ children }: Props) {
  return <Card>{children}</Card>;
}
