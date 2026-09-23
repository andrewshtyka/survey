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
// import css from '.'

// utility
import React from "react";

// #endregion ===========================

export default function Arrow({
    stroke = 2,
    width = 16,
    color = "var(--color-black)"
}) {
    return <svg
        width={width}
        height={width}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
            <path
            d="M14.8493 7.07108L7.7782 14.1422L0.707131 7.07108M7.7782 14.1422L7.7782 1.41274e-05"
            stroke={color}
            strokeWidth={stroke}/>
        </svg>
}
