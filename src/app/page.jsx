// 'use client';

// #region ============================== Imports

// animation
// import { motion } from "motion/react";

// assets

// components
import Hero from "@/components/layout/Hero/Hero";
import About from "@/components/layout/About/About";
import Results from "@/components/layout/Results/Results";
import AnswersStart from "@/components/layout/AnswersStart/AnswersStart";
import Question_1 from "@/components/layout/Question_1/Question_1";

// constants

// hooks

// providers / context

// styles
// import css from '.'

// utility
import React from "react";

// #endregion ===========================

export default function HomePage() {
    return <>
        <Hero />
        <About />
        <Results />
        <AnswersStart />
        <Question_1 />
    </>;
}
