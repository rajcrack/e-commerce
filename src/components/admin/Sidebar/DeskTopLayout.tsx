import Tile from "@/components/Tile"
import AdminItemList from "./ItemsList";
import { FcShop } from "react-icons/fc";


export const AdminDeskTopLayout = () => {
    return (
        <div>
            <div className="w-full h-[90px] flex flex-row-reverse text-white items-center justify-evenly shadow-inner bg-[#0a6ec7] rounded-md">
                <div className="">
                    <FcShop className="text-[60px]" />
                </div>
                <div className={`text-[25px] text-center font-light`}>
                    Ecommerce <br />Admin
                </div>
            </div>
            <div className="pt-4 pb-5 pl-2 pr-2 v">
                <AdminItemList />
            </div>
        </div>)
}
