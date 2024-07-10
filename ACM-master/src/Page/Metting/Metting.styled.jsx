import styled from "styled-components"
export const Container = styled.div`
    user-select: none;
    height: 100%;
    width: 100%;
    padding-left: 2%;
    padding-right: 2%;
`

export const Title = styled.h1`
    height: 10%;
    display: flex;
    justify-content: start;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 3em;
    margin: 0;
`

export const Content = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    gap: 10px;
    margin-top: 2%;
`


// Action container
export const Action = styled.div`
    max-width: 400px;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 1%;
    .calendar {
        .action-title {
            color: black;
            font-size: 1.5em;
            font-weight: bold;
            height: 10%;
            display: flex;
            align-items: center;
        }
        height: 65%;
        .flat-picker-wrapper {
            height: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            input.flatpickr-input {
                display: none!important;
            }
        }
    }
    
    .room {
        height: 35%;
        .room-title {
            color: black;
            font-size: 1.5em;
            font-weight: bold;
            height: 25%;
            display: flex;
            align-items: center;
        }
        .room-element {
            padding: 5%;
            height: 25%;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5%;
            .element-order {
                font-size: 1.25em;
            }
            .element-content {
                font-size: 1.25em;
            }
            &:hover {
                cursor: pointer;
                color: black;
            }
        }
        .room-element.selected {
            font-weight: bold;
            color: black;
        }
    }
`;



// Result container
export const Result = styled.div`
    flex: 1;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
`