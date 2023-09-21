import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            Friend got: {gift}
        </div>
    );
};

export default Friend;