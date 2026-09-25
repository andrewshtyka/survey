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
    src = "",
    height,
    bgColor = ""
}) {
    return <li className={css.li} >
                {/* top text */}
                <div className={css.top}>
                    <div className={css.container_percent}>
                        <h5 className={`f_h5_helvetica`} >
                            {percent}
                        </h5>
                        <p className={`f_body_l_helvetica ${css.percent}`} >%</p>
                    </div>

                    <p className={`f_body_m_helvetica ${css.top_text}`} >
                        {text}
                    </p>
                </div>

                {/* chart */}
                <div
                    className={css.chart}
                    style={{
                        height: `calc(var(--height) * ${height})`
                    }}
                >
                    <div
                        className={css.dither_bg}
                        style={{
                            backgroundColor: `var(--color-${bgColor})`,
                            backgroundImage: `url(${src})`
                        }}
                    />
                </div>
    </li>;
}
