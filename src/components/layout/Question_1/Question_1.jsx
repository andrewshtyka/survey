// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import BarChart from "@/components/ui/BarChart/BarChart";

// constants

// data
import { data_1 } from "@/data/data_1";

// hooks

// providers / context

// styles
import css from './Question_1.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Question_1() {
    console.log(data_1);
    
    return <section className={css.section}>
        <p className={`f_mono_xl ${css.number_container}`}>{data_1.id}</p>
        
        <h2 className={`f_h5_helvetica ${css.h2}`}>
            {data_1.question.map((el, i) => (
                <span key={i}>{el}</span>
            ))}
        </h2>

        <div className={css.data_container}>
            <p className={`f_mono_m ${css.description}`}>
                {data_1.response_chart.title}
            </p>

            <ul className={css.list}>
                {data_1.response_chart.content.map(({percent, text, width}, i) => (
                    <BarChart
                        key={i}
                        percent={percent}
                        text={text}
                        width={width}
                    />
                ))}
            </ul>
        </div>
    </section>;
}
