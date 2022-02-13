import {HomeWhoWeHelpResult} from "./HomeWhoWeHelpResult";
import {WhoWeHelpData} from "../assets/whoWeHelpData";
import {useEffect, useMemo, useState} from "react";
import {Decoration} from "./Decoration";
import {HomeWhoWeHelpButton} from "./HomeWhoWeHelpButton";

export const HomeWhoWeHelp = ({id}) => {
    const [currentData, setCurrentData] = useState(WhoWeHelpData[0]);
    const [currentDataID, setCurrentDataID] = useState(0)
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const buttonClickHandler = (e) => {
        if(e.target.id === 'option1') {
            setCurrentDataID(0);
            setCurrentData(WhoWeHelpData[0]);
        } else if(e.target.id === 'option2') {
            setCurrentDataID(1);
            setCurrentData(WhoWeHelpData[1]);
        } else if(e.target.id === 'option3') {
            setCurrentDataID(2);
            setCurrentData(WhoWeHelpData[2]);
        }
        setCurrentPage(1);
    }

    const recalculateNumberOfPages = useMemo( () => {
        let calculatedPages = Math.ceil(currentData.list.length/3);
        calculatedPages = calculatedPages > 1 ? calculatedPages : 0;
        setNumberOfPages(calculatedPages);
    }, [currentData] )

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
                            <button onClick={buttonClickHandler} className={`button ${currentDataID===0 && "button--active"}`} id="option1">Fundacjom</button>
                            <button onClick={buttonClickHandler} className={`button ${currentDataID===1 && "button--active"}`} id="option2">Organizacjom pozarządowym</button>
                            <button onClick={buttonClickHandler} className={`button ${currentDataID===2 && "button--active"}`} id="option3">Lokalnym zbiórkom</button>
                        </div>
                        <div className="description__wrapper">
                            <p>{currentData.description}</p>
                        </div>
                        <div className="results__wrapper">
                            <div className="result">
                                {currentData.list.filter((e,i) => i >= (currentPage-1)*3 && i <= ((currentPage)*3)-1).map(e => (<HomeWhoWeHelpResult data={e} key={e.name} page={currentPage}/>))}
                            </div>
                        </div>
                        <div className="controller_wrapper">
                            {[...Array(numberOfPages)].map((e, i) => (
                                <HomeWhoWeHelpButton key={i} currentPage={currentPage} pageClickHandler={() => {setCurrentPage(i+1)}} i={i}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}