import { ReactNode, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  title?: string;
};
export function Button({ children, title, ...rest }: ButtonProps) {
  return <S.Button {...rest}>{title || children}</S.Button>;
}
