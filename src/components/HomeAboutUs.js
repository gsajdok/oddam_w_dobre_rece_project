import People from "../assets/People.jpg";
import Signature from "../assets/Signature.svg";
import {Decoration} from "./Decoration";


export const HomeAboutUs = ({id}) => {
    return (
        <section className="homeAboutUs" id={id}>
            <div className="wrapper">
                <div className="content">
                    <div className="about__wrapper">
                        <div className="about">
                            <h2>O nas</h2>
                            <Decoration/>
                            <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                            <img src={Signature} alt="Signature" className="signature"/>
                        </div>
                    </div>
                    <div className="image">
                        <img src={People} alt="People"/>
                    </div>
                </div>
            </div>
        </section>
    )
}