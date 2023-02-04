import { Warning } from 'phosphor-react';
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
import { FieldError } from 'react-hook-form';

import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: FieldError;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, ...inputProps }: InputProps,
  ref
) => {
  return (
    <S.Wrapper>
      {!!label && <label>{label}</label>}

      <input ref={ref} {...inputProps} className={error ? 'hasError' : ''} />
      <S.Error>
        {error && (
          <small className={error ? 'hasError' : ''}>{error?.message}</small>
        )}
      </S.Error>
    </S.Wrapper>
  );
};

export const Input = forwardRef(InputBase);
