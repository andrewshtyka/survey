"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import Line from '@/components/ui/Line/Line';
import ResultsCard from '@/components/ui/ResultsCard/ResultsCard';

// constants

// data
import { dataResults } from '@/data/results';

// hooks
import useIsDesktop from '@/hooks/useIsDesktop';

// providers / context

// styles
import css from './Results.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Results() {
    const isDesktop = useIsDesktop();

    return <section className={css.section}>
        <h2 className={`f_h1_helvetica f_capitalize ${css.h1}`}>
            Висновки
        </h2>

        <Line color="beige" />

        <ul className={css.list}>
            {dataResults.map(({id, question, answer, angle}) => (
                <ResultsCard
                    key={id}
                    number={id}
                    question={question}
                    answer={answer}
                    angle={angle}
                    isDesktop={isDesktop}
                />
            ))}
        </ul>
    </section>
}
