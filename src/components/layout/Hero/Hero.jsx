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
            src="/images/hero_img.webp"
            alt="Гори і небо"
            fill
            className={css.img}
        />

        <div className={css.title_container}>
            <h1 className={`f_capitalize f_center ${css.h1}`}>
                <span className={`f_h1_baskerville ${css.title_bar_secondary}`}>
                    <span className={css.dither_bg} />
                    яке воно?
                </span>
                <span className={`f_h1_helvetica ${css.title_bar_primary} ${css.first}`}>портфоліо</span>
                <span className={`f_h1_helvetica ${css.title_bar_primary} ${css.second}`}>продуктового</span>
                <span className={`f_h1_helvetica ${css.title_bar_primary} ${css.third}`}>дизайнера</span>
            </h1>
        </div>

        <div className={css.bottom}>
            <p className={`f_mono_s f_uppercase ${css.p}`}>
                аі використав для формування висновків, це 7 речень. Воно об’єктивно краще підсумовує великі обсяги даних. Решта роботи над репортом - руцями і головою: Рісьорч, дизайн, розробка.
            </p>
            <div className={css.arrow_container}>
                <Arrow width="24" />
            </div>
        </div>
    </section>
};
