import React from "react";
import { RoughNotation } from "react-rough-notation";

export const Highlight = ({ color, type, children }) => {
    return (
        <RoughNotation
            show={true}
            type={type}
            multiline={true}
            padding={2}
            animationDuration={1900}
            color={color}
            strokeWidth={2}
        >
            {children}
        </RoughNotation>
    );
};
