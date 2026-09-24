// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import Image from "next/image";
import Arrow from '@/components/icons/Arrow/Arrow';

// constants

// data
import { dataHero } from "@/data/hero";

// hooks

// providers / context

// styles
import css from './Hero.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Hero() {
    return <section className={css.section}>
        <Image
            src={dataHero.image.src}
            alt={dataHero.image.alt}
            fill
            className={css.img}
            loading="eager"
        />

        <div className={css.title_container}>
            <h1 className={`f_capitalize f_center ${css.h1}`}>
                <span className={`f_h1_baskerville ${css.title_bar_secondary}`}>
                    <span className={css.dither_bg} />
                    {dataHero.title[0]}
                </span>
                <span className={`f_h1_helvetica ${css.title_bar_primary} ${css.first}`}>
                    {dataHero.title[1]}
                </span>
                <span className={`f_h1_helvetica ${css.title_bar_primary} ${css.second}`}>
                    {dataHero.title[2]}
                </span>
                <span className={`f_h1_helvetica ${css.title_bar_primary} ${css.third}`}>
                    {dataHero.title[3]}
                </span>
            </h1>
        </div>

        <div className={css.bottom}>
            <p className={`f_mono_s f_uppercase ${css.p}`}>
                {dataHero.description}
            </p>
            <div className={css.arrow_container}>
                <Arrow width="24" />
            </div>
        </div>
    </section>
};
