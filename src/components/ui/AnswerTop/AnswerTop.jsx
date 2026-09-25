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
    return <>
        <p className={`f_mono_xl ${css.number_container}`}>{data.id}</p>
        
        <h2 className={`f_h5_helvetica ${css.h2}`}>
            {data.question.map((el, i) => (
                <span key={i}>{el}</span>
            ))}
        </h2>
    </>;
}
