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
import css from './Bar.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Bar({
    text = [],
    percent = "",
    bgColor = "",
    src = "",
    alt = "",
    width,
    offset
}) {
    return <li
                className={css.li}
                style={{
                    flex: width,
                }}
            >
                {/* top text */}
                <p
                    className={`f_body_m_helvetica ${css.top_text}`}
                    style={{
                        marginBlockEnd: `calc(var(--offset) * ${offset})`
                    }}
                >
                    {text}
                </p>

                {/* percent bar */}
                <div className={css.container_percent}>
                    <div
                        className={css.dither_bg}
                        style={{
                            backgroundColor: `var(--color-${bgColor})`,
                            backgroundImage: `url(${src})`
                        }}
                    />

                    <h5
                        className={`f_h6_helvetica`}
                        style={{
                            color: bgColor === "black" ? "var(--color-beige)" : "var(--color-black)"
                        }}
                    >
                        {percent}
                    </h5>
                    <p
                        className={`f_body_l_helvetica ${css.percent}`}
                        style={{
                            color: bgColor === "black" ? "var(--color-beige)" : "var(--color-black)"
                        }}
                    >%</p>
                </div>
    </li>;
}
