import GrandFather from "./GrandFather";
import './FamilyTree.css'
import { createContext, useState } from "react";

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {
    const newAsset = 'diamond';
    // Sending this asset to my special with context api

    const [money, setMoney] = useState(0);

    return ( 
        <div className="family-tree">
            <h1>Family Tree</h1>
            <h2>Total Family Money: {money}</h2>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext value={newAsset}>
                    <GrandFather></GrandFather>
                </AssetContext>
            </MoneyContext>
        </div>
     );
}
 
export default FamilyTree;