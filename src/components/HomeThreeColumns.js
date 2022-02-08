export const HomeThreeColumns = ({id}) => {
    return (
        <section className="homeThreeColumns" id={id}>
            <div className="wrapper">
                <div className="content">
                    <article className="column">
                        <h3>10</h3>
                        <span>Oddanych worków</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </article>
                    <article className="column">
                        <h3>5</h3>
                        <span>Wspartych organizacji</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </article>
                    <article className="column">
                        <h3>7</h3>
                        <span>Zorganizowanych zbiórek</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}