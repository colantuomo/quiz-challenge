import { ContainerBarProgression, ContainerBackgroundBar } from './styles';

interface Props {
  progress: number;
}

export function ProgressBar({ progress }: Props) {
  return (
    <div>
      <ContainerBackgroundBar>
        <ContainerBarProgression progress={progress} />
      </ContainerBackgroundBar>
    </div>
  );
}
