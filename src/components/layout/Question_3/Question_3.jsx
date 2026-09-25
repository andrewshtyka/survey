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
import { data_3 } from "@/data/data_3";
import { dataResults } from "@/data/results";

// hooks

// providers / context

// styles
import css from './Question_3.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Question_3() {
    return <section className={css.section}>
        <AnswerTop data={data_3} />

        <AnswersList data={data_3} gridRow="2 / 3" />
        
        <Conclusion
            id={data_3.id}
            title={dataResults.title}
            data={dataResults.data}
        />
    </section>;
}
