import React from "react";
import ResultSquare from "../components/ResultSquare";
import BackgroundBorder from "../components/BackgroundBorder";
import Layer from "../components/Layer"

const ResultPage = () => {
    return (
        <div style={{height: '500px', width: '600px'}}>
            <div>
                <BackgroundBorder>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <ResultSquare />
                        <ResultSquare />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: '0', width: '100%' }}>
                        <ResultSquare />
                        <ResultSquare />
                    </div>
                </BackgroundBorder>
            </div>
            
            <Layer />
        </div>
    );
}

export default ResultPage;
