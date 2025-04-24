import "./style.css";

const Section = ({ title, container, extraHeaderContent }) => (
    <section className="section">

        <header className="section__header">
            <h2 className="section__title">{title}</h2>
            {extraHeaderContent}
        </header>

        <div className="section__container">
            {container}
        </div>

    </section>
);

export default Section;