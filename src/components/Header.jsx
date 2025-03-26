import React, { useState } from "react";
import logoSite from "../images/Logo.svg";
import cartImg from "../images/cart.svg";
import burger from "../images/burger_menu.svg";
import userImg from "../images/person.svg";
import closeImg from "../images/closeMenuImg.svg";
import callImg from "../images/call.svg";

function Header() {
    const [modal, setModal] = useState(false);
    const [animate, setAnimate] = useState(false);
    function handleOpenMenu() {
        console.log("hello");
        setModal(true);
    }
    function handleCloseMenu() {
        setAnimate(true);
        setTimeout(() => {
            setModal(false);
            setAnimate(false);
        }, 400);
    }
    return (
        <div className="p-[18px] border-b-[1px] border-b-[#D4D7E5] mb-[40px] relative">
            <div className="container flex items-center justify-between">
                <img
                    className="cursor-pointer select-none animate-slideDown"
                    draggable={false}
                    src={logoSite}
                    width={184}
                    height={24}
                    alt=""
                />
                <div className="flex items-center justify-between gap-5">
                    <div className="flex justify-between gap-1">
                        <img src={userImg} alt="" width={24} height={24} />
                        <h1 className="font-bold text-[#9093A6] text-[16px]">
                            Log In
                        </h1>
                    </div>
                    <div className="flex justify-between gap-1">
                        <img src={cartImg} width={24} height={24} alt="" />
                        <h1 className="font-bold text-[#9093A6] text-[16px]">
                            0
                        </h1>
                    </div>
                    <div
                        onClick={handleOpenMenu}
                        className="w-[48px] h-[48px] rounded-full bg-white shadow-md flex justify-center cursor-pointer hover:bg-yellow-300 transition-all hover:shadow-lg"
                    >
                        <img src={burger} width={24} height={24} alt="" />
                    </div>
                </div>
            </div>
            {modal === true ? (
                <>
                    <div className="fixed inset-0 bg-[#797979] opacity-70 z-40"></div>
                    <div
                        className={`fixed right-0 top-0 z-50 w-[380px] pt-[20px] bg-white h-[100%] ${
                            animate === true
                                ? "animate-slideOutRight"
                                : "animate-slideInRight"
                        }`}
                    >
                        <div className="p-5">
                            <div className="flex items-center justify-between mb-5">
                                <img
                                    src={logoSite}
                                    className=""
                                    width={150}
                                    alt=""
                                />
                                <div
                                    onClick={handleCloseMenu}
                                    className="w-[48px] h-[48px] rounded-full bg-white shadow-md flex justify-center cursor-pointer hover:bg-yellow-300 transition-all hover:shadow-lg"
                                >
                                    <img
                                        width={24}
                                        height={24}
                                        src={closeImg}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="">
                                <div className="flex items-center gap-4 mb-2">
                                    <img
                                        src={callImg}
                                        width={24}
                                        height={24}
                                        alt=""
                                    />
                                    <h1 className="text-[#3F4255] text-[16px] font-bold">
                                        0800 111 126
                                    </h1>
                                </div>
                                <li className="text-[#9093A6] text-[12px] mb-[24px]">
                                    8:00 - 22:00
                                </li>
                            </div>
                            <hr />
                            <div className="mt-[22px] mb-[22px]">
                                <h1 className="text-[16px] text-[#9093A6] font-bold cursor-pointer">
                                    Delivery info
                                </h1>
                            </div>
                            <hr />
                            <div className="mt-[22px] mb-[22px]">
                                <h1 className="text-[16px] text-[#9093A6] font-bold cursor-pointer">
                                    About us
                                </h1>
                            </div>
                            <hr />
                            <div className="mt-[22px] mb-[22px]">
                                <h1 className="text-[16px] text-[#9093A6] font-bold cursor-pointer">
                                    Restaraunts
                                </h1>
                            </div>
                            <hr />
                            <div className="mt-[22px] mb-[22px]">
                                <h1 className="text-[16px] text-[#9093A6] font-bold cursor-pointer">
                                    Specialities
                                </h1>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Header;
