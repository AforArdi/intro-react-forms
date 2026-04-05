import Brother from "./Brother";
import Me from "./Me";
import Sister from "./Sister";

const Dad = () => {
    return ( 
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Me></Me>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
     );
}
 
export default Dad;