import React from "react";
import Skeleton from "react-loading-skeleton";

const PeopleKnowSkeleton = () => {
  return (
    <div className="bg-white sm:h-[350px] w-full rounded-2xl overflow-hidden shadow-lg sm:my-3 my-1 p-4">
      <div className="flex sm:flex-col items-center gap-4">
        {/* Skeleton image */}
        <Skeleton
          circle={true}
          height={100}
          width={100}
          className="sm:h-[200px] sm:w-full sm:rounded-t-2xl sm:rounded-b-none"
        />

        <div className="flex flex-col w-full">
          {/* Name */}
          <Skeleton height={20} width={"60%"} />

          {/* Mutual friend row */}
          <div className="flex items-center gap-2 mt-2">
            <Skeleton circle={true} height={20} width={20} />
            <Skeleton height={16} width={"50%"} />
          </div>

          {/* Buttons */}
          <div className="flex sm:flex-col gap-2 mt-3">
            <Skeleton height={36} width={"100%"} />
            <Skeleton height={36} width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleKnowSkeleton;
