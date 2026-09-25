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
import { data_5 } from "@/data/data_5";
import { dataResults } from "@/data/results";

// hooks

// providers / context

// styles
import css from './Question_5.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Question_5() {
    return <section className={css.section}>
        <AnswerTop data={data_5} />

        <ul className={css.bars_container}>
            {data_5.response_chart.content.map(({
                id,
                percent,
                text,
                images,
                offset
            }) => (
                <Bar
                    key={id}
                    percent={percent}
                    text={text}
                    imgDesktop={images.desktop.src}
                    altDesktop={images.desktop.alt}
                    widthDesktop={images.desktop.width}
                    heightDesktop={images.desktop.height}
                    imgMobile={images.mobile.src}
                    altMobile={images.mobile.alt}
                    widthMobile={images.mobile.width}
                    heightMobile={images.mobile.height}
                    offset={offset}
                />
            ))}
        </ul>
        
        <Conclusion
            id={data_5.id}
            title={dataResults.title}
            data={dataResults.data}
        />
    </section>;
}
