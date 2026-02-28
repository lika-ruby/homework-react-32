import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 36px 40px;
    background: #14202E;
`;

export const Text = styled.p`
    display: flex;
    align-items: center;
    color: #FFF;
    font-size: 24px;
    font-weight: 700;
    gap: 8px
`;

export const Number = styled.span`
    font-weight: 500;
`;

export const Button = styled.button`
    display: flex;
    width: 50px;
    height: 48px;
    justify-content: center;
    align-items: center;
    background: #980000;
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
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