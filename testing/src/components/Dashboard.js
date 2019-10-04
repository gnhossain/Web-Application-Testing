import React from "react";

const Dashboard = ({ strike, setStrike, ball, setBall}) => {
    const strikeHandler = () => {
        if(strike <2) {
            setStrike(strike +1)
        } else {
            setStrike(0);
            setBall(0);
        };
    };

    const ballHandler = () => {
        if(ball <3) {
            setBall(ball + 1)
        } else {
            setStrike(0);
            setBall(0);
        };
    };

    const foulHandler = () => {
        if(strike <2) {
            setStrike(strike +1);
        };
    };

    const hitHandler = () => {
        setStrike(0);
        setBall(0);
    };


    return (
        <div>
            <button onClick={strikeHandler}>Strike</button>
            <button onClick={ballHandler}>Ball</button>
            <button onClick={foulHandler}>Foul</button>
            <button onClick={hitHandler}>Hit</button>
        </div>
    );
};


export default Dashboard;