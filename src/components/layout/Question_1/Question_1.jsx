// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import BarChart from "@/components/ui/BarChart/BarChart";
import Conclusion from "@/components/ui/Conclusion/Conclusion";
import AnswerTop from "@/components/ui/AnswerTop/AnswerTop";
import AnswersList from "@/components/ui/AnswersList/AnswersList";

// constants

// data
import { data_1 } from "@/data/data_1";
import { dataResults } from "@/data/results";

// hooks

// providers / context

// styles
import css from './Question_1.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Question_1() {
    const totalAnswers = data_1.response_text.content.length;
    
    return <section className={css.section}>
        <AnswerTop data={data_1} />

        <div className={css.list_data_container}>
            <p className={`f_mono_m f_mono_spacing_0 ${css.description}`}>
                {data_1.response_chart.title}
            </p>

            <ul className={css.list_data}>
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

        <AnswersList
            data={data_1}
            gridRow="3 / 4"
            totalAnswers={totalAnswers}
        />
        
        <Conclusion
            id={data_1.id}
            title={dataResults.title}
            data={dataResults.data}
        />
    </section>;
}
