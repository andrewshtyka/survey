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
import css from './Conclusion.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Conclusion({title = "", id, data = []}) {
    const answer = data.find(el => el.id === id).answer;

    return <article className={css.article}>
        <div className={`${css.dither_bg}`} />
        
        <div className={css.text_container}>
            <p className={`f_mono_m f_mono_spacing_0 ${css.title}`}>{title}</p>
            <p className={`f_h4_helvetica ${css.text}`}>{answer}</p>
        </div>
    </article>;
}
