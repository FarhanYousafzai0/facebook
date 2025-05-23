import React from "react";

const PeopleKNow = () => {
  return (
    <div>
      <>
        <div className="bg-white sm:h-[350px] w-[100%] rounded-2xl overflow-hidden sm:shadow-sm shadow-gray-400 sm:my-3 my-1">
          <div className="flex sm:flex-col items-center justify-content gap-2 ">
            <img
              src="https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-1/435993811_3696080517329456_1906578812885049427_n.jpg?stp=dst-jpg_p160x160_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFPGI1Ev1rVcQuy48gPShCzpzfz34P0TdinN_Pfg_RN2Ia1B12hVod3zP-miOXo-OF79McvKiNk05ikPgArWCw2&_nc_ohc=XLdCe-M0tcEQ7kNvwGW6i4d&_nc_oc=AdkIZaS5rYm5C_i-BOnTJ62in22B-fAvEBQg9pHCQFB4NCemUfOeIhrGcNO3Sqq3drkLfYBTGPV_4pA7emWEwPSM&_nc_zt=24&_nc_ht=scontent.fisb13-1.fna&_nc_gid=hlkRzEHjd2oVfwh3Jnoefg&oh=00_AfETrttfV9twLaNhQ5Uf_O9-_oAIYh_xMX6Ofl7pLy4D-g&oe=681AFC09"
              className="sm:h-[200px] rounded-full sm:rounded-t-2xl sm:rounded-b-none h-[100px] sm:w-[100%] bg-amber-200"
              alt=""
            />
            <div className="flex flex-col p-0">
              <p className=" font-semibold">MUhmmad Usman PTcl</p>
              <div className="flex items-center">
                <img
                  className="h-[20px] w-[20px] rounded-full"
                  src="https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-1/435993811_3696080517329456_1906578812885049427_n.jpg?stp=dst-jpg_p160x160_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFPGI1Ev1rVcQuy48gPShCzpzfz34P0TdinN_Pfg_RN2Ia1B12hVod3zP-miOXo-OF79McvKiNk05ikPgArWCw2&_nc_ohc=XLdCe-M0tcEQ7kNvwGW6i4d&_nc_oc=AdkIZaS5rYm5C_i-BOnTJ62in22B-fAvEBQg9pHCQFB4NCemUfOeIhrGcNO3Sqq3drkLfYBTGPV_4pA7emWEwPSM&_nc_zt=24&_nc_ht=scontent.fisb13-1.fna&_nc_gid=hlkRzEHjd2oVfwh3Jnoefg&oh=00_AfETrttfV9twLaNhQ5Uf_O9-_oAIYh_xMX6Ofl7pLy4D-g&oe=681AFC09"
                  alt=""
                />
                <p className="text-gray-600 p-0 ">1 mutual friend</p>
              </div>
              <div className="flex sm:flex-col gap-2">
                <button className="px-7 py-1 whitespace-nowrap  rounded-lg w-full sm:my-1 bg-[#DFE9F2] text-blue-500 p-2 font-semibold">
                  Add friend
                </button>
                <button className="px-7 py-1  rounded-lg w-full p-2 bg-gray-200 ">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default PeopleKNow;
