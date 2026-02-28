import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 380px;
    background: #980000;
    padding: 18px 30px;
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    margin: 64px auto 0;
    border: 3px solid #980000;

    &:hover {
        background: #770000;
        border: 3px solid #770000;
    }

    &:focus {
        background:#770000;
        border: 3px solid #ffffff;
    }
`;