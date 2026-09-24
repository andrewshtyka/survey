// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import Image from 'next/image';

// constants

// data
import { dataAnswersStart } from '@/data/dataAnswersStart';

// hooks

// providers / context

// styles
import css from './AnswersStart.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function AnswersStart() {
    return <section className={css.section}>
        <Image
            src={dataAnswersStart.images.bg.src}
            alt={dataAnswersStart.images.bg.alt}
            fill
            className={css.img}
            loading="lazy"
        />

        <div className={css.title_container}>
            <h1 className={`f_capitalize f_center ${css.h1}`}>
                <span className={`f_h3_helvetica ${css.title_bar_primary} ${css.first}`}>
                    {dataAnswersStart.title[0]}
                </span>

                <span className={`f_h3_baskerville ${css.title_bar_secondary}`}>
                    <span className={css.dither_bg} />
                    {dataAnswersStart.title[1]}
                </span>

                <span className={`f_h3_helvetica ${css.title_bar_primary} ${css.second}`}>
                    {dataAnswersStart.title[2]}
                </span>

                <span className={`f_h3_helvetica ${css.title_bar_primary} ${css.third}`}>
                    {dataAnswersStart.title[3]}
                    <span className={`f_h2_baskerville ${css.title_bar_tertiary}`}>
                        <span className={css.dither_bg} />
                        {dataAnswersStart.title[4]}
                    </span>
                </span>

                <span className={css.container_icon}>
                    <span className={css.dither_bg} />
                    <Image
                        src={dataAnswersStart.images.icon.src}
                        alt={dataAnswersStart.images.icon.alt}
                        width={40}
                        height={40}
                        className={css.icon}
                        loading="lazy"
                    />
                </span>
            </h1>
        </div>
    </section>;
}
