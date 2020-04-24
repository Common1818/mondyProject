import React from 'react';
import { Button } from "react-bootstrap"

const scoreBoard = ({score,  total, setShowScoreBoard, quiz}) => {
    console.log(quiz)
    return ( 
        <div className="ml-5 bg-light mb-5 pb-5" key={quiz.id}>
            <h3 className="text-center pt-2"><b>Score</b></h3>   
            <div className="m-5 text-center">
                <h1>
                    {score} / {total}
                </h1>
            </div>
            <div className="m-5 mt-3">
                {
                    score === total ? (
                        <div className="text-center">
                           <h3> Well Done! you have a perfect score </h3>
                        </div>
                    ) : (
                        <div className="text-center">
                        <Button variant={"primary"} 
                            onClick={ ()=> setShowScoreBoard(false) }>
                            Try Again 
                        </Button>
                        </div>
                    )
                }
                {
                    quiz.courseId ? (
                        <div className="text-center">
                            <Button variant={"primary"}>
                                Get Certificate
                            </Button>
                        </div>
                    ): null
                }
            </div>
        </div>
     );
}
 
export default scoreBoard;