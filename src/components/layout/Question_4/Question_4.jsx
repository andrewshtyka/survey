// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import Conclusion from "@/components/ui/Conclusion/Conclusion";
import AnswerTop from "@/components/ui/AnswerTop/AnswerTop";
import AnswersList from "@/components/ui/AnswersList/AnswersList";
import Bar from "./Bar/Bar";

// constants

// data
import { data_4 } from "@/data/data_4";
import { dataResults } from "@/data/results";

// hooks

// providers / context

// styles
import css from './Question_4.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Question_4() {
    return <section className={css.section}>
        <AnswerTop data={data_4} />

        <ul className={css.bars_container}>
            {data_4.response_chart.content.map(({
                id,
                percent,
                text,
                bgColor,
                image,
                width,
                offset
            }) => (
                <Bar
                    key={id}
                    percent={percent}
                    text={text}
                    bgColor={bgColor}
                    src={image.src}
                    alt={image.alt}
                    width={width}
                    offset={offset}
                />
            ))}
        </ul>
        
        <Conclusion
            id={data_4.id}
            title={dataResults.title}
            data={dataResults.data}
        />
    </section>;
}
