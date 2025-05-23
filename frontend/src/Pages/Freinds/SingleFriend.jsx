import React from "react";

const SingleFriend = () => {
  return (
    <>
      <div className="bg-white sm:h-[350px] w-[100%] rounded-2xl overflow-hidden sm:shadow-sm  shadow-gray-400 sm:my-3 my-1">
        <div className="flex gap-2  sm:flex-col items-center justify-content ">
          <img
            src="https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-1/465969032_589120683457204_5501389201014455811_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE6sWFZt_pXliXb0_XgNsPxAseeJY8o_AECx54ljyj8AThJHJ4SRLpxKRXLcccoTZ8OfUFFlpB-kNALuRg4ppDp&_nc_ohc=y9WEXEhk4ysQ7kNvwEycDrY&_nc_oc=Adk0bmdpgFt-y6HvGQdabu246ol39ATu8j4JGOb3WkuzzmxwGPMkT6KbONpo-jpOoN663QCOYKO4esSQm4MR8-lA&_nc_zt=24&_nc_ht=scontent.fisb13-1.fna&_nc_gid=hlkRzEHjd2oVfwh3Jnoefg&oh=00_AfFfD6dM3JkgiI4j-OQRIzj2iip0z7CC7jz6nhhLU7g7aA&oe=681AEA42"
            className="sm:h-[200px] h-[90px] rounded-full sm:rounded-t-2xl sm:rounded-b-none  sm:w-[100%] bg-amber-200"
            alt=""
          />
          <div className="flex flex-col items gap-1">
            <p className=" font-semibold text-sm sm:text-md">
              MUhmmad Usman PTcl
            </p>
            <div className="flex items-center">
              <img
                className="h-[20px] w-[20px] rounded-full"
                src="https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-1/460601890_122097616736538854_6380405638775777164_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE7VvY7NdC6VJ70vW1OlU5dLqEa-kWRhM0uoRr6RZGEzSgJJ6F6CAOw_RiD9Nf8T0rSQfbMStAfx39kB5gyVm7y&_nc_ohc=djiPgSLACUYQ7kNvwG6aPQA&_nc_oc=Adk7NVBDstBo98cWWa-cm9evephNkK9Y9xC9qTHZPbU9vhspo-39HbGf8ZrKCyTzuefmbWoXzbZjxF7jTx8M62WY&_nc_zt=24&_nc_ht=scontent.fisb13-1.fna&_nc_gid=0a7fmYICGbsliNb86jDERA&oh=00_AfEozvW-CVusI088DLpwYv0VU06XeeJqIJsbeS1sss4NFg&oe=681AFDB9"
                alt=""
              />
              <p className="text-gray-600 p-0 ">1 mutual friend</p>
            </div>
            <div className="flex sm:flex-col gap-2">
              <button className="px-7 py-1 font-bold rounded-lg w-full sm:my-1 bg-[#0866FF] text-white">
                Confirm
              </button>
              <button className=" px-8 font-bold py-1 rounded-lg w-full   bg-gray-200 ">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleFriend;
