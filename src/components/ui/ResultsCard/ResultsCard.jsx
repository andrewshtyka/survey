"use client";

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
import { li } from 'motion/react-client';
import css from './ResultsCard.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function ResultsCard({
    question = "Question",
    answer = "Answer",
    number = 1,
    angle = 0,
    isDesktop = true
}) {
    const alignSelf = number % 2 === 0 ? "flex-end" : "flex-start";
    const isLeft = number % 2 !== 0;
    const isRight = number % 2 === 0;
    
    const appliedAngle = isDesktop ? angle : 0;

    return <li
                className={css.li}
                style={{
                    transform: `rotate(${appliedAngle}deg)`,
                    alignSelf: alignSelf,
                    left: isLeft && "var(--left-gap)",
                    right: isRight && "var(--left-gap)",
                }}
            >
                <ul className={css.dots_container}>
                    <div className={css.dots_bg} />
                    {[...Array(4)].map((_, i) => (
                        <li key={i} className={css.dot} />
                    ))}
                </ul>

                <div className={css.main_container}>
                    <p className={`f_mono_l ${css.number_container}`}>
                        <span className={css.number_bg} />
                        #{number}
                    </p>
                    <h4 className={`f_h3_helvetica ${css.title}`}>{question}</h4>
                    <p className={`f_body_l_helvetica ${css.answer}`}>{answer}</p>
                </div>
            </li>;
}
