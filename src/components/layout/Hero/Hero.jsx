// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets


// components

// constants

// hooks

// providers / context

// styles
import css from './Hero.module.css'

// utility
import Image from "next/image";
import React from "react";

// #endregion ===========================

export default function Hero() {
    return <section className={css.section}>
        {/* <Image
            src="/images/hero_img.webp"
            alt="Гори і небо"
            fill
            className={css.img}
        />; */}

        <div className={css.title_container}>
            <h1 className={`f_capitalize f_center ${css.h1}`}>
                <span className={`f_h1_baskerville ${css.title_bar_secondary}`}>яке воно?</span>
                <span className={`f_h1_helvetica ${css.title_bar_primary}`}>портфоліо</span>
                <span className={`f_h1_helvetica ${css.title_bar_primary}`}>продуктового</span>
                <span className={`f_h1_helvetica ${css.title_bar_primary}`}>дизайнера</span>
            </h1>
        </div>
    </section>
};
