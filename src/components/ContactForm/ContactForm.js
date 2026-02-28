import styled from "styled-components";

export const Form = styled.form`
    margin-top: 48px;
`;

export const Labels = styled.label`
    display: flex;
    flex-direction: column;
    gap: 48px;
`;

export const Label = styled.label`
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
`;

export const Input = styled.input`
    display: flex;
    width: 667px;
    padding: 18px 30px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    background: #14202E;
    border: none;

    &::placeholder {
    font-weight: 400;
    color: rgba(255, 219, 219, 0.60);
    }
`;

export const Button = styled.button`
    display: flex;
    width: 667px;
    justify-content: center;
    align-items: center;
    background: #980000;
    padding: 18px 30px;
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    margin-top: 64px;
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