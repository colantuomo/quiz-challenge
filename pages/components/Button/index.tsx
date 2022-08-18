import { Spinner } from '../Spinner';
import { ButtonDiv } from './style';

interface Props {
  onClick?: () => void;
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({ children, loading, onClick }: Props) {
  return (
    <ButtonDiv disabled={loading} onClick={onClick}>
      {loading ? <Spinner /> : children}
    </ButtonDiv>
  );
}
