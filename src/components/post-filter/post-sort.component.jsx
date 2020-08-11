import React from "react";
import {
  SORT_BY_NEWEST,
  SORT_BY_OLDEST,
  SORT_BY_MOST_POPULAR,
  SORT_BY_LEAST_POPULAR,
} from "database/utils";

const PostSort = ({ handleSort }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-grayy p-2"> Sort By</div>
      <div className="flex justify-between">
        <form onChange={handleSort}>
          <select
            className="bg-transparent text-grayy p-2"
            id="select-view-option"
          >
            <option value={SORT_BY_NEWEST}>Newest</option>
            <option value={SORT_BY_MOST_POPULAR}>Most Popular</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default PostSort;
