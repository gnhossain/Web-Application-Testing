import React from "react";

const Dashboard = ({ strike, setStrike, ball, setBall}) => {
    const strikeHandle = () => {
        if(strike <=1) {
            setStrike(strike +1)
        } else {
            setStrike(0);
            setBall(0);
        };


        return (
        <div>
            
        </div>
        );
    };
};

export default Dashboard;