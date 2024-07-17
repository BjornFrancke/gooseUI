import { SearchbarProps } from "../Searchbar";
import { FC } from "react";
import { Searchbar } from "../index";

const Example: FC<SearchbarProps> = ({
    disabled = false,
    size = "medium",
    placeholder = "Search...",
    onChange = undefined,
}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Searchbar
                disabled={disabled}
                placeholder={placeholder}
                size={size}
                onChange={onChange}
            />
        </div>
    );
};

export default Example;
