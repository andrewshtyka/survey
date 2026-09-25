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
import css from './ListItemText.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function ListItemText({id, text = [], isLast = false}) {
    const appliedNumber = id.toString().length > 1 ? id : `0${id}`;

    return <li
            className={css.li_card}
            style={{
                marginBlockEnd: isLast ? 0 : "var(--gap-s)"
            }}
        >
        <p className={`f_mono_m ${css.number}`}>{appliedNumber}</p>
        <ul className={`f_body_m_helvetica ${css.text}`}>
            {text.map((el, i) => (
                <li key={i} className={css.text_item}>{el}</li>
            ))}
        </ul>
    </li>;
}
