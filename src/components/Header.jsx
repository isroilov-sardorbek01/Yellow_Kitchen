import React from "react";
import logoSite from "../images/Logo.svg";
import cartImg from "../images/cart.svg";
import burger from "../images/burger_menu.svg";
import userImg from "../images/person.svg";

function Header() {
    return (
        <div className="p-[18px] border-b-[1px] border-b-[#D4D7E5] mb-[40px]">
            <div className="container flex justify-between items-center">
                <img
                    className="select-none cursor-pointer"
                    draggable={false}
                    src={logoSite}
                    width={184}
                    height={24}
                    alt=""
                />
                <div className="flex gap-5 justify-between items-center">
                    <div className="flex gap-1 justify-between">
                        <img src={userImg} alt="" width={24} height={24} />
                        <h1 className="font-bold text-[#9093A6] text-[16px]">
                            Log In
                        </h1>
                    </div>
                    <div className="flex gap-1 justify-between">
                        <img src={cartImg} width={24} height={24} alt="" />
                        <h1 className="font-bold text-[#9093A6] text-[16px]">
                            0
                        </h1>
                    </div>
                    <div className="w-[48px] h-[48px] rounded-full bg-white shadow-md flex justify-center cursor-pointer hover:bg-yellow-300 transition-all hover:shadow-lg">
                        <img src={burger} width={24} height={24} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
