import { Warning } from 'phosphor-react';
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from 'react';
import { FieldError, set } from 'react-hook-form';

import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: FieldError;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, ...inputProps }: InputProps,
  ref
) => {
  const [areOnFocus, setAreOnFocus] = useState(false);
  return (
    <S.Wrapper areOnFocus={areOnFocus}>
      {!!label && <label>{label}</label>}

      <input
        ref={ref}
        {...inputProps}
        className={error ? 'hasError' : ''}
        onFocus={() => setAreOnFocus(true)}
      />
      <S.Error>
        {error && (
          <small className={error ? 'hasError' : ''}>{error?.message}</small>
        )}
      </S.Error>
    </S.Wrapper>
  );
};

export const Input = forwardRef(InputBase);
