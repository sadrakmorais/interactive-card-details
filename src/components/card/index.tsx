import { ReactNode } from 'react';
import * as S from './styles';

type ViewerCardProps = {
  style: 'front' | 'back';
  rigthPosition: number;
  children: ReactNode;
};

export function ViewerCard({
  style,
  children,
  rigthPosition,
}: ViewerCardProps) {
  return (
    <S.WrapperCard styleCard={style} rigthPosition={`${rigthPosition}px`}>
      {children}
    </S.WrapperCard>
  );
}
