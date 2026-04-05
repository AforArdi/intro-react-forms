import Aunt from "./Aunt";
import Dad from "./Dad";
import Uncle from "./Uncle";

const GrandFather = () => {
    return ( 
        <div className="flex justify-center">
            <h2>Grand Father</h2>
            <section className="flex justify-center">
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
     );
}
 
export default GrandFather;