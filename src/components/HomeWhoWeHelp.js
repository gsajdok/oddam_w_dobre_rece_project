import {HomeWhoWeHelpResult} from "./HomeWhoWeHelpResult";
import {WhoWeHelpData} from "../assets/whoWeHelpData";
import {useEffect, useState} from "react";
import {Decoration} from "./Decoration";

export const HomeWhoWeHelp = ({id}) => {
    const [currentData, setCurrentData] = useState(WhoWeHelpData[0]);
    const [page, setPage] = useState(1);

    const buttonClickHandler = (e) => {
        if(e.target.id === 'option1') {
            setCurrentData(WhoWeHelpData[0]);
        } else if(e.target.id === 'option2') {
            setCurrentData(WhoWeHelpData[1]);
        } else if(e.target.id === 'option3') {
            setCurrentData(WhoWeHelpData[2]);
        }
        setPage(1);
    }

    const pageClickHandler = e => {
        setPage(parseInt(e.target.id))
    }


    return (
        <section className="homeWhoWeHelp" id={id}>
            <div className="wrapper">
                <div className="content">
                    <div className="header">
                        <h2>Komu pomagamy?</h2>
                        <Decoration/>
                    </div>
                    <div className="whoWeHelp__functionality">
                        <div className="button__wrapper">
                            <button onClick={buttonClickHandler} className="button" id="option1">Fundacjom</button>
                            <button onClick={buttonClickHandler} className="button" id="option2">Organizacjom pozarządowym</button>
                            <button onClick={buttonClickHandler} className="button" id="option3">Lokalnym zbiórkom</button>
                        </div>
                        <div className="description__wrapper">
                            <p>{currentData.description}</p>
                        </div>
                        <div className="results__wrapper">
                            <div className="result">
                                {currentData.list.filter((e,i) => i >= (page-1)*3 && i <= ((page)*3)-1).map(e => (<HomeWhoWeHelpResult data={e} key={e.name} page={page}/>))}
                            </div>
                        </div>
                        <div className="controller_wrapper">
                            {Array(Math.ceil(currentData.list.length/3 > 1 ? currentData.list.length/3 : 0)).fill(null).map((e, i) => (
                                <button onClick={pageClickHandler} className="button button--small" id={i+1} key={i}>{i+1}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}