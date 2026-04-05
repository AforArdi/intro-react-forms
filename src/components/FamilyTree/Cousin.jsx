import { use } from "react";
import { MoneyContext } from "./FamilyTree";
import Special from "./Special";

const Cousin = ({name}) => {
    const [money, setMoney] = use(MoneyContext);

    return ( 
        <div>
            <h2>{name}</h2>
            {
                name === 'Md' && <Special></Special>
            }
            {
                name === 'Ali' && <button
                onClick={()=> setMoney(money + 1000)}
                className="btn btn-soft">Add 1000</button>
            }
        </div>
     );
}
 
export default Cousin;