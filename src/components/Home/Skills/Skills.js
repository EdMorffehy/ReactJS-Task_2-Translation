import React from "react";
import style from "./skills.module.css";
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "./ChangingProgressProvider";
import "./style.css";

const Skills  = () =>{
    return(
        <div className={style.skills}>
            <div className={style.ourSkil}> OUR SKILS </div>
                <div className={style.progress}>
                    <div className={style.blockProgress}>
                    <ChangingProgressProvider values={[0, 75]}>
                        {percentage => (
                            <CircularProgressbar
                                className={style.test}
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    pathTransition:
                                        percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                                })}
                            />
                        )}
                    </ChangingProgressProvider>
                    <div>Marketing</div>
                    </div>
                    <div className={style.blockProgress}>
                    <ChangingProgressProvider values={[0, 85]}>
                        {percentage => (
                            <CircularProgressbar
                                className={style.test}
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    pathTransition:
                                        percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                                })}
                            />
                        )}
                    </ChangingProgressProvider>
                        <div>Reaserch</div>
                    </div>
                    <div className={style.blockProgress}>
                    <ChangingProgressProvider values={[0, 75]}>
                        {percentage => (
                            <CircularProgressbar
                                className={style.test}
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    pathTransition:
                                        percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                                })}
                            />
                        )}
                    </ChangingProgressProvider>
                        <div>Management</div>
                    </div>
                    <div className={style.blockProgress}>
                    <ChangingProgressProvider values={[0, 55]}>
                        {percentage => (
                            <CircularProgressbar
                                className={style.test}
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    pathTransition:
                                        percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                                })}
                            />
                        )}
                    </ChangingProgressProvider>
                        <div>Consultancy</div>
                    </div>
                    <div className={style.blockProgress}>
                    <ChangingProgressProvider values={[0, 100]}>
                        {percentage => (
                            <CircularProgressbar
                                className={style.test}
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    pathTransition:
                                        percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                                })}
                            />
                        )}
                    </ChangingProgressProvider>
                        <div>Rectangle</div>
                    </div>
                </div>
        </div>
    )
};

export default Skills;