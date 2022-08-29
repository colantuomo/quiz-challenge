import { ButtonDiv } from './style';
import ReactLoading from 'react-loading';

interface Props {
  onClick?: () => void;
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({ children, loading, onClick }: Props) {
  return (
    <ButtonDiv disabled={loading} onClick={onClick}>
      {loading ? (
        <ReactLoading type="spin" color="white" height={35} width={35} />
      ) : (
        children
      )}
    </ButtonDiv>
  );
}
