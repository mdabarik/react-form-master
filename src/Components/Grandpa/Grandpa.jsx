import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

const Grandpa = () => {
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <section className="flex justify-center items-center">
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;