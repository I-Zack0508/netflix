

import React, { useState } from "react";
import '../components/MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import List from "@mui/material/List";

export default ({ title, items }) => {

    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 250;
        if (window.innerWidth - listW > x) {
            x = window.innerWidth - listW - 60;
        }
        setScrollX(x)
    }

    return (
        <div className="movieRow" >
            <h2>{title}</h2>
            <div className="movieRow-left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow-right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow-listarea"
                style={{
                    marginLeft: scrollX,
                    width: items.results.length * 250
                }}
            >
                <div className="movieRow-list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow-item">
                            <img
                                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                alt={item.original_title || item.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};