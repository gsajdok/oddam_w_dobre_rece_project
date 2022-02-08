import People from "../assets/People.jpg";
import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";


export const HomeAboutUs = ({id}) => {
    return (
        <section className="homeAboutUs" id={id}>
            <div className="wrapper">
                <div className="content">
                    <div className="about__wrapper">
                        <div className="about">
                            <h2>O nas</h2>
                            <img src={Decoration} alt="Decoration" className="decoration"/>
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