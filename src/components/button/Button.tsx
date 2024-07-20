import { MouseEventHandler } from "react";
import styled from "styled-components";

export type ButtonProps = {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    inverted?: boolean;
    color?: "main" | "success" | "warning" | "danger";
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
    border-style: solid;
    border-width: 2px;
    border-color: ${(props) =>
        !props.inverted
            ? "transparent"
            : props.color === "main"
              ? "#FF5800"
              : props.color === "success"
                ? "#00ff2a"
                : props.color === "danger"
                  ? "#ff0000"
                  : "#ffbb00"};
    color: ${(props) => (props.inverted ? "#000000" : "#FFF")};
    background-color: ${(props) =>
        props.inverted
            ? "transparent"
            : props.color === "main"
              ? "#FF5800"
              : props.color === "success"
                ? "#00ff2a"
                : props.color === "danger"
                  ? "#ff0000"
                  : "#ffbb00"};
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
    color,
    ...props
}) => {
    return (
        <StyledButton
            type="button"
            onClick={onClick}
            primary={primary}
            color={color}
            disabled={disabled}
            size={size}
            {...props}
        >
            {text}
        </StyledButton>
    );
};

export default Button;
