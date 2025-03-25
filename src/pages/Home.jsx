import React from "react";
import homeImg from "../images/homeImg1.svg";

function Home() {
    return (
        <div>
            <div className="container flex items-center justify-between">
                <div className="">
                    <h1 className="text-[#3F4255] text-[56px] font-medium tracking-[3px] mb-[88px]">
                        Your Food court at home
                    </h1>
                    <div className="flex items-center gap-[24px]">
                        <div className="border-[2px] rounded-[4px] border-[#FFE145] px-[24px] py-[12px] text-center hover:shadow-md transition-all cursor-pointer hover:scale-125">
                            <h1 className="font-bold text-[16px] text-[#3F4255]">
                                Delivery
                            </h1>
                            <h1 className="font-normal text-[12px] text-[#3F4255]">
                                Order in
                            </h1>
                        </div>
                        <div className="border-[2px] rounded-[4px] border-[#FFE145] px-[24px] py-[12px] text-center hover:shadow-md transition-all cursor-pointer hover:scale-125">
                            <h1 className="font-bold text-[16px] text-[#3F4255]">
                                Takeout
                            </h1>
                            <h1 className="font-normal text-[12px] text-[#3F4255]">
                                Grab and go
                            </h1>
                        </div>
                    </div>
                </div>
                <img
                    src={homeImg}
                    className="max-w-[803px] max-h-[706px]"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Home;
