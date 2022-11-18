import styled from "styled-components";

export const MovieListStyle = styled.div`
    height: 500px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    overflow: auto;
`

export const MovieItemFrame = styled.div`
    width: 560px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 200px;
    background-color: #bbb;
    border-radius: 20px;
    display: flex;
    flex-flow: row nowrap;
`

export const MoviePoster = styled.img`
    height: 180px;
    max-height: 180px;
`

export const MovieDetails = styled.div`
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    justify-content: center;
`

export const MovieTitle = styled.h2`
    width: 400px;
    margin-top: 0px;
    margin-bottom: 0px;
`

export const MovieYear = styled.p`
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
`

export const MovieButton = styled.button`
    height: 30px;
    width: 300px;
    margin-top: -10px;
    margin-bottom: 0px;
`