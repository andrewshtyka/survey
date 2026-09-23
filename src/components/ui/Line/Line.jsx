// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components

// constants

// hooks

// providers / context

// styles
import css from './Line.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Line({
    type="horizontal",
    length="100%",
    color="black"
}) {
    let width = "var(--space-px)";
    let height = "var(--space-px)";

    if (type === "horizontal") {
        width = length;
    } else if (type === "vertical") {
        height = length;
    };

    return <div style={{
        backgroundColor: `var(--color-${color})`,
        width: width,
        height: height,
    }} />;
}
