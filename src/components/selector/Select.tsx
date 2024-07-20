import { ChangeEvent } from "react";
import styled from "styled-components";

export type SelectProps = {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    options: string[];
    size?: "small" | "medium" | "large";
    onChange?: ChangeEvent<HTMLInputElement>;
};

const StyledSelect = styled.select<SelectProps>`
    height: fit-content;
    border-radius: 12px;
    padding-left: 18px;
    box-shadow:
        0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    padding-top: 10px;
    background-color: #f7f7f7;
    padding-bottom: 10px;
    font-size: 18px;
    color: #ff5800;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.25rem' height='1.25rem' viewBox='0 0 32 32'%3E%3Cpath fill='%23FF5800' d='M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: calc(100% - 0.75rem) center !important;
    padding-right: 2rem !important;
    border: none;
    -moz-appearance: none !important;
    -webkit-appearance: none !important;
    appearance: none !important;
    font-weight: normal;

    &:focus {
        background-color: white;
        outline-color: #ff5800;
        outline-style: solid;
    }
`;

const Select: React.FC<SelectProps> = ({
    size,
    primary,
    disabled,
    options,
    text,
    onChange,
    ...props
}) => {
    return (
        <StyledSelect
            onChange={onChange}
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
