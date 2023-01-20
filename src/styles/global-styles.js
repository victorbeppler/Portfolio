import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

        color: var(--white);
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
    }
    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    html {
        background: var(--dark);
    }
    :root {
        --light: #fff;
        --dark: #160f29;
        --text-dark: #fff;
        --text-light: #160f29;
    }
    `;
