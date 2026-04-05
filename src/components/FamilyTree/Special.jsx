import { use } from "react";
import { AssetContext } from "./FamilyTree";

const Special = () => {
    const newAsset = use(AssetContext);

    return ( 
        <div>
            <h2>Special:</h2>
            <p>New Asset{newAsset}</p>
        </div>
     );
}
 
export default Special;