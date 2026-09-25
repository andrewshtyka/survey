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
import { data_2 } from "@/data/data_2";
import { dataResults } from "@/data/results";

// hooks

// providers / context

// styles
import css from './Question_2.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Question_2() {
    return <section className={css.section}>
        <AnswerTop data={data_2} />

        <AnswersList data={data_2} gridRow="2 / 3" />
        
        <Conclusion
            id={data_2.id}
            title={dataResults.title}
            data={dataResults.data}
        />
    </section>;
}
