import { MouseEventHandler } from "react";
import styled from "styled-components";

export type ButtonProps = {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
    line-height: 1;
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
    display: inline-block;
    border: 2px solid #ff5800;
    color: ${(props) => (props.primary ? "#fff" : "#FF5800")};
    background-color: ${(props) => (props.primary ? "#FF5800" : "transparent")};
    padding: ${(props) =>
        props.size === "small"
            ? "7px 25px 8px"
            : props.size === "medium"
              ? "9px 30px 11px"
              : "14px 30px 16px"};
`;

const Button: React.FC<ButtonProps> = ({
    size,
    primary,
    disabled,
    text,
    onClick,
    ...props
}) => {
    return (
        <StyledButton
            type="button"
            onClick={onClick}
            primary={primary}
            disabled={disabled}
            size={size}
            {...props}
        >
            {text}
        </StyledButton>
    );
};

export default Button;
