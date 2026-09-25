// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import ListItemText from '../ListItemText/ListItemText';

// constants

// hooks

// providers / context

// styles
import css from './AnswersList.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function AnswersList({ data, gridRow, totalAnswers }) {
    return <div
                className={css.list_text_container}
                style={{ gridRow: gridRow }}
            >
            {data.response_text?.title && <p className={`f_mono_m f_mono_spacing_0 ${css.description}`}>
                {data.response_text.title}
            </p>}

            <ul className={css.list_text}>
                {data.response_text?.content.map(({id, text}) => (
                    <ListItemText
                        key={id}
                        id={id}
                        text={text}
                        isLast={totalAnswers === id ? true : false}
                    />
                ))}
            </ul>
        </div>
}
