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
import css from './AnswerTop.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function AnswerTop({ data }) {
    const amount = data.question.length;

    return <>
        <p className={`f_mono_xl ${css.number_container}`}>{data.id}</p>
        
        <h2 className={`f_h5_helvetica ${css.h2}`}>
            {data.question.map((el, i) => {
                if (amount > 1) {
                    const appliedStyle = i === 1 ?
                    {} : {
                            display: "inline-flex",
                            marginBlockEnd: "var(--space-10)"
                        };
                    return  <span key={i} style={appliedStyle}>{el}</span>
                } else if (amount === 1) {
                    return  <span key={i} >{el}</span>
                }
            })}
        </h2>
    </>;
}
