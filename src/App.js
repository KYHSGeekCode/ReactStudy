import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Hello from "./Hello.tsx";
import Wrapper from "./Wrapper.tsx";
import Counter from "./Counter.tsx";

function App() {
    const name = '응애';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
    }


    return (
        <>
            <Hello name={"응애"} color={"red"}/>
            <Hello name={"응애 비구조화 할당"} color={"blue"}/>
            <Hello color={"green"}/>
            <Wrapper>
                <Hello color={"green"}/>
                <Counter/>
            </Wrapper>
        </>
    );
}

export default App;
