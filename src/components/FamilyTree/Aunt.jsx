import Cousin from "./Cousin";

const Aunt = () => {
    return ( 
        <div>
            <h2>Aunt</h2>
            <section className="flex">
                <Cousin name='Md'></Cousin>
                <Cousin name='Ali'></Cousin>
            </section>
        </div>
     );
}
 
export default Aunt;