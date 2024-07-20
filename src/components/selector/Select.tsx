import { MouseEventHandler } from "react";
import styled from "styled-components";

export type SelectProps = {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    options: string[];
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledSelect = styled.select<SelectProps>``;

const Select: React.FC<SelectProps> = ({
    size,
    primary,
    disabled,
    options,
    text,
    onClick,
    ...props
}) => {
    return (
        <StyledSelect
            onClick={onClick}
            primary={primary}
            disabled={disabled}
            size={size}
            options={options}
            {...props}
        >
            {options.map((option) => (
                <option value={option}>{option}</option>
            ))}
        </StyledSelect>
    );
};

export default Select;
