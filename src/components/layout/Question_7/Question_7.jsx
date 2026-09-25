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

// constants

// data
import { data_7 } from "@/data/data_7";
import { dataResults } from "@/data/results";

// hooks

// providers / context

// styles
import css from './Question_7.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Question_7() {
    return <section className={css.section}>
        <AnswerTop data={data_7} />

        <AnswersList data={data_7} gridRow="2 / 3" />
        
        <Conclusion
            id={data_7.id}
            title={dataResults.title}
            data={dataResults.data}
        />
    </section>;
}
