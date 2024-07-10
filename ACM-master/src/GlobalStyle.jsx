import { createGlobalStyle } from "styled-components";
import "flatpickr/dist/themes/material_green.css";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');
    :root {
        --sidebar-wt: 60px;
        --header-ht: 60px;
        --main-gradient: linear-gradient(118deg,rgba(30, 30, 30 ,1),rgba(30, 30, 30 ,.7));
        --modal-header: 65px;
    }
    
    *, *:before, *:after {
        -webkit-box-sizing: border-box!important;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        margin: 0;

        @media screen and (min-width: 769px) {
            font-size: 1.5rem;          
        }
        @media screen and (max-width: 768px) {
            font-size: 1.8rem;
        }
    }
    html {
        font-size: 62.5%;
        font-size: 10px;
        width: 100%;
        line-height: 1.5;
        letter-spacing: .01rem;
    }
    body {
        color: #626262;
        text-rendering: optimizeSpeed;
        background-color: #FCFCFC;
        font-family: Montserrat,Helvetica,Arial,sans-serif;
        font-weight: 400;
    }
    a {
        color: var(--text-color);
        text-decoration: none;
    }

    .select-none {
        -webkit-user-select: none!important;
        -moz-user-select: none!important;
        -ms-user-select: none!important;
        user-select: none!important;
    }

    .text-center {
        text-align: center!important;
    }
    
    .text-dark {
        color: rgba(30,30,30,1)!important;
    }

    .col3 {
        width: 33.333333%;
        height: 100%;
    }
`

export default GlobalStyles;