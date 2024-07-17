import { ChangeEvent, FC, MouseEventHandler } from "react";
import styled from "styled-components";

export type SearchbarProps = {
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    placeholder?: string;
    onChange?: ChangeEvent<HTMLInputElement>;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledSearchbarButton = styled.button<SearchbarProps>`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 12px 12px 0;
    border: none;
    padding: 0 18px;
    margin: auto 0;
    background-color: transparent;
    cursor: pointer;
    fill: #f06435;
    &:hover {
        background-color: #f06435;
        fill: white;
    }

    &:focus {
        outline-style: hidden;
    }
`;

const StyledSearchbarDiv = styled.div`
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    width: fit-content;
    height: fit-content;
    margin-top: 0;
    position: relative;
    display: flex;
    align-items: center;
    color: #ff5800;
`;

const StyledSearchbar = styled.input<SearchbarProps>`
    height: 50px;
    border-radius: 12px;
    padding-left: 18px;
    outline-style: none;
    background-color: #f7f7f7;
    border: none;
    box-shadow:
        0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    width: 100%;
    padding-right: 200px;
    color: #ff5800;
    caret-color: #ff5800;
    accent-color: #ff5800;
    font-size: 18px;

    &::placeholder {
        color: #ff5800;
        font-weight: normal;
    }
    &:focus {
        background-color: white;
        outline-color: #ff5800;
        outline-style: solid;
    }
`;

const Searchbar: FC<SearchbarProps> = ({
    disabled,
    size,
    placeholder,

    onChange,
    ...Props
}) => {
    return (
        <StyledSearchbarDiv>
            <StyledSearchbar
                type={"search"}
                placeholder={placeholder}
                {...Props}
            />
            <StyledSearchbarButton>
                <svg
                    height="18"
                    viewBox="0 0 512 512"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
            </StyledSearchbarButton>
        </StyledSearchbarDiv>
    );
};

export default Searchbar;
