import React, { FC } from 'react';
import './ProgressBar.css'

interface ProgressBarProps {
    percentage: number
}

const ProgressBar: FC<ProgressBarProps> = ({
    percentage,
}) => {
    return (
        <div className="progressbar-wrap">
            <div className="title-wrap">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>

            <div className="progress-percent-wrap">
                <div className="progress-percent" style={{width: `${percentage}%`}} />
            </div>
            <div className="percent-attachment">%</div>
        </div>
    )
}

export { ProgressBar }