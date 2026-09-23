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

// hooks

// providers / context

// styles
import css from './About.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function About() {
    return <section className={css.section}>
        <h2 className={`f_h1_helvetica f_capitalize ${css.h1}`}>Про опитування</h2>

        <Line />

        <div className={css.bottom}>
            {/* col 1 */}
            <div className={css.description}>
                <div className={css.asterisk}>
                    <Asterisk />
                </div>
                <p className={`f_mono_m f_uppercase ${css.title_description}`}>
                    продуктові компанії,
                    без агенцій та аутсорсу
                </p>
            </div>

            {/* col 2 */}
            <div className={css.content_wrapper}>
                <p className={`f_mono_m f_uppercase ${css.title_top}`}>
                    Хто?
                </p>
                <p className={`f_h2_helvetica ${css.figure}`}>
                    19
                </p>
                <p className={`f_mono_m f_uppercase ${css.title_bottom}`}>
                    керівників дизайн відділів продуктових компаній
                </p>
            </div>

            {/* col 3 */}
            <div className={css.content_wrapper}>
                <p className={`f_mono_m f_uppercase ${css.title_top}`}>
                    Коли?
                </p>
                <p className={`f_h2_helvetica f_capitalize ${css.figure}`}>
                    вер 26ʼ
                </p>
                <p className={`f_mono_m f_uppercase ${css.title_bottom}`}>
                    Період проведення дослідження
                </p>
            </div>
        </div>
    </section>;
}
