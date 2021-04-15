import React, { useContext } from 'react'

import { SliderContext } from '../../contexts/SliderContext'

import colors from '../../styles/colors.json'
import styles from '../../styles/components/Slider.module.css'

export default function Slider() {
    const { thumbPosiX, slide, theme } = useContext(SliderContext)
    const sliderBG = theme ==='light' ? colors.light['slider-bg'] : colors.dark['slider-bg']
    
    return (
        <div style={{background: sliderBG}} className={styles.sliderContainer} onClick={slide}>
            <div className={styles.thumb} style={{left: thumbPosiX}}></div>
        </div>
    )
}
