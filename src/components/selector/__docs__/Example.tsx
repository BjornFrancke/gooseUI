import { FC } from "react";
import Select, { SelectProps } from "../Select";

const Example: FC<SelectProps> = ({
    disabled = false,
    onClick = () => {},
    primary = true,
    options = ["test", "test2"],
    size = "small",
    text = "Button",
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
            <Select
                size={size}
                text={text}
                options={options}
                disabled={disabled}
                onClick={onClick}
                primary={primary}
            />
        </div>
    );
};

export default Example;
