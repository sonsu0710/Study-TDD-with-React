import styled from "styled-components";

interface Props {
    readonly placeholder?: string;
    readonly value?: string;
    readonly onChange?: (text: string) => void;
}

const InputBox = styled.input`
  flex: 1;
  font-size: 16px;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  outline: none;
`

export const Input = ({placeholder, value, onChange}: Props) => {
    return (
        <InputBox
            placeholder={placeholder}
            value={value}
            onChange={e => typeof onChange === 'function' ? onChange(e.target.value) : null}
        />
    )
}