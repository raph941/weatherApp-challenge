import React, { ChangeEvent, FC } from 'react';
import './SearchBar.css'
import CloseIcon from '@mui/icons-material/Close';
import FadeIn from 'react-fade-in';


interface SearchBarProps {
    className?: string
    handleCloseSearch: () => void
    searchInputVal: string
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: FC<SearchBarProps> = ({
    className,
    handleCloseSearch,
    handleInputChange,
    searchInputVal
}) => {
    return (
        <div className={`${className} search-bar-wrap`}>
            <div className="close-icon-wrap">
                <CloseIcon className="close-icon" onClick={handleCloseSearch} />
            </div>

            <FadeIn>
                <div className="search-input-wrap">
                    <input value={searchInputVal} onChange={handleInputChange} placeholder="search location" />
                    <button className="search-btn">
                        Search
                    </button>
                </div>

                <select className="location-select-field" />

                <p className="floating-locations">Barcelona</p>

                <p className="floating-locations">Long Beach</p>

            </FadeIn>
        </div>
    )
}

export { SearchBar }