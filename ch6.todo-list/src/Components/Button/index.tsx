import styled from "styled-components";


interface ContainerProps {
    readonly backgroundColor: string;
    readonly hoverColor: string;
}

const Container = styled.div<ContainerProps>`
  text-align: center;
  padding: 10px 20px;
  background-color: #304FFE;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Label = styled.div`
  color: #FFFFFF;
  font-size: 16px;
`;

interface Props {
    readonly label: string;
    readonly backgroundColor?: string;
    readonly hoverColor?: string;
    readonly onClick?: () => void;
}

export const Button = (
    {
        label,
        backgroundColor = '#304FFE',
        hoverColor = '#1E40FF',
        onClick
    }: Props) => {
    return (
        <Container
            backgroundColor={backgroundColor}
            hoverColor={hoverColor}
            onClick={onClick}
        >
            <Label>{label}</Label>
        </Container>
    )
}