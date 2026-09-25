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
import css from './BarChart.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function BarChart({percent = "", text = [], width = ""}) {
    
    return <li className={css.li}>
            <div
                className={css.dither_bg}
                style={{ width: width }}
            />

            <div className={css.container_percent}>
                <h5 className={`f_h3_helvetica ${css.h5}`}>{percent}</h5>
                <p className={`f_body_l_helvetica ${css.percent}`}>%</p>
            </div>

            <p className={`f_body_m_helvetica ${css.description}`}>{text.map((el, i) => (
                <span key={i}>{el}</span>
            ))}</p>
    </li>;
}
