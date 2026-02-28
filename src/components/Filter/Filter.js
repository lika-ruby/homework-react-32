import styled from "styled-components";

export const Label = styled.label`
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 36px;
`;

export const Input = styled.input`
    width: 353px;
    padding: 18px 30px;
    background: #14202E;
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    border: none;

    &::placeholder {
    font-weight: 400;
    color: rgba(255, 219, 219, 0.60);
    }
`;
