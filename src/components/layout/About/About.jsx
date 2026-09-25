// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import Line from '@/components/ui/Line/Line';
import Asterisk from '@/components/icons/Asterisk/Asterisk';

// constants

// data
import { dataAbout } from '@/data/about';

// hooks

// providers / context

// styles
import css from './About.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function About() {
    return <section className={css.section}>
        <h2 className={`f_h1_helvetica f_capitalize ${css.h1}`}>{dataAbout.title}</h2>

        <Line />

        <div className={css.bottom}>
            {/* col 1 */}
            <div className={css.description}>
                <div className={css.asterisk}>
                    <Asterisk />
                </div>
                <p className={`f_mono_m f_uppercase ${css.title_description}`}>
                    {dataAbout.content[0].text}
                </p>
            </div>

            {/* col 2 */}
            <div className={css.content_wrapper}>
                <p className={`f_mono_m f_uppercase ${css.title_top}`}>
                    {dataAbout.content[1].title}
                </p>
                <p className={`f_h2_helvetica ${css.figure}`}>
                    {dataAbout.content[1].figures}
                </p>
                <p className={`f_mono_m f_uppercase ${css.title_bottom}`}>
                    {dataAbout.content[1].text}
                </p>
            </div>

            {/* col 3 */}
            <div className={css.content_wrapper}>
                <p className={`f_mono_m f_uppercase ${css.title_top}`}>
                    {dataAbout.content[2].title}
                </p>
                <p className={`f_h2_helvetica f_capitalize ${css.figure}`}>
                    {dataAbout.content[2].figures}
                </p>
                <p className={`f_mono_m f_uppercase ${css.title_bottom}`}>
                    {dataAbout.content[2].text}
                </p>
            </div>
        </div>
    </section>;
}
