"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import Arrow from '@/components/icons/Arrow/Arrow';

// constants

// hooks

// providers / context

// styles
import css from './Final.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Final() {
    function handleScrollToTop(){
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return <section className={css.section}>
        <div></div>
        <button
            type="button"
            className={css.button}
            onClick={handleScrollToTop}
        >
            <span className={`f_h4_helvetica`}>Нагору</span>
            <span className={css.icon}>
                <Arrow color="var(--icon-color)" />
            </span>
        </button>
    </section>;
}
