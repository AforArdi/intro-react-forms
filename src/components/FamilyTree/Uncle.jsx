import Cousin from "./Cousin";

const Uncle = () => {
    return ( 
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name='Omar'></Cousin>
                <Cousin name='Osman'></Cousin>
            </section>
        </div>
     );
}
 
export default Uncle;