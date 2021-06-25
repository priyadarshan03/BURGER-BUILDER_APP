import React from 'react';
import classes from './NavigationItem.css';
const navigatioItem = (Props) => (
    <li className ={classes.NavigationItem }>
        <a 
            href={Props.link} 
            className={Props.active ? classes.active : null}
            >{Props.children} </a>
    </li>
);


export default navigatioItem;

