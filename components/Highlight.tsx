import React from "react";
import { RoughNotation } from "react-rough-notation";

export const Highlight = ({ color, type, children }) => {
    return (
        <RoughNotation
            show={true}
            type={type}
            multiline={true}
            padding={3}
            animationDuration={1700}
            color={color}
            strokeWidth={4}
        >
            {children}
        </RoughNotation>
    );
};
