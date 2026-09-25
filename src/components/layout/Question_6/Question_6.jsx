// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import Conclusion from "@/components/ui/Conclusion/Conclusion";
import AnswerTop from "@/components/ui/AnswerTop/AnswerTop";
import Bar from "./Bar/Bar";

// constants

// data
import { data_6 } from "@/data/data_6";
import { dataResults } from "@/data/results";

// hooks

// providers / context

// styles
import css from './Question_6.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Question_6() {
    return <section className={css.section}>
        <AnswerTop data={data_6} />

        <ul className={css.bars_container}>
            {data_6.response_chart.content.map(({
                id,
                percent,
                text,
                src,
                height,
                bgColor
            }) => (
                <Bar
                    key={id}
                    percent={percent}
                    text={text}
                    src={src}
                    height={height}
                    bgColor={bgColor}
                />
            ))}
        </ul>
        
        <Conclusion
            id={data_6.id}
            title={dataResults.title}
            data={dataResults.data}
        />
    </section>;
}
