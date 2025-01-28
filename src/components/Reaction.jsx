import React from 'react';

const Reaction = ({ icon, count }) => {
  return (
    <div className="flex text-[#536471] items-center gap-[1px]">
      {icon}
      <span className="text-[16px]">{count}</span>
    </div>
  );
};

export default Reaction;
