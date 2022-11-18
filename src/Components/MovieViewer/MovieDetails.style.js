import styled from "styled-components";

export const MovieDetailsFrame = styled.div`
    margin-top:-30px;
    display:flex;
    flex-flow: column nowrap;
`

export const MovieDetailsTitle = styled.h1`
    font-size: 50px;
    margin-bottom: 10px;
`

export const MovieDetailsSmallFrame = styled.div`
    display:flex;
    flex-flow: row nowrap;
    margin-top:0px;
    height:100px;
`

export const MovieDetailsPoster = styled.img`
    height:340px;
    margin-left: 15px;
`

export const MovieDetailsPlotFrame = styled.div`
    width: 400px;
    height: 340px;
    display: flex;
    flex-flow: column nowrap;
    overflow: auto;
`

export const MovieDetailsPlot = styled.p`
    margin-left: 10px;
    text-align: justify;
    width: 320px;
`

export const MovieDetailsGenre = styled.h5`
    margin-top: 0px;
    margin-left: 10px;
    max-width: 380px;
    text-align: left;
`
