// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import Image from 'next/image';

// constants

// hooks

// providers / context

// styles
import css from './Bar.module.css'

// utility
import React from "react";

// #endregion ===========================

export default function Bar({
    text = [],
    percent = "",
    offset,
    imgDesktop = "",
    altDesktop = "",
    imgMobile = "",
    altMobile = "",
    widthDesktop,
    heightDesktop,
    widthMobile,
    heightMobile
}) {
    
    return <li className={css.li} >
            {/* percent bar */}
            <div className={css.container_percent}>
                <h5 className={`f_h6_helvetica`} >{percent}</h5>
                <p className={`f_body_l_helvetica ${css.percent}`} >%</p>
            </div>

            {/* top text */}
            <p
                className={`f_body_m_helvetica ${css.top_text}`}
                style={{ marginBlockEnd: `calc(var(--offset) * ${offset * 0.14})` }}
            >
                {text}
            </p>

            <div className={css.mobile}>
                <Image
                    src={imgMobile}
                    alt={altMobile}
                    width={widthMobile}
                    height={heightMobile}
                    loading="lazy"
                    className={css.img_mobile}
                />
            </div>

            <div className={css.desktop}>
                <Image
                    src={imgDesktop}
                    alt={altDesktop}
                    width={widthDesktop}
                    height={heightDesktop}
                    loading="lazy"
                    className={css.img_desktop}
                />
            </div>
    </li>;
}
