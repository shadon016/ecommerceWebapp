import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <select>
          <option>high to low</option>
          <option>low to high</option>
        </select>
      </div>
      <div>
        <label htmlFor="fiveStar">five star</label>
        <input type="checkbox" name="fiveStar" />
        <label htmlFor="fourStar">four star</label>
        <input type="checkbox" name="fourStar" />
        <label htmlFor="fiveStar">three star</label>
        <input type="checkbox" name="threeStar" />
      </div>
    </div>
  );
};

export default Filter;
