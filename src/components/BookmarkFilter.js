import React from 'react';

const BookmarkFilter = ({ showBookmarked, onToggleFilter }) => {
  return (
    <div className="BookmarkFilter">
      <label>
        <input
          type="checkbox"
          checked={showBookmarked}
          onChange={onToggleFilter}
        />
        Show Bookmarked Only
      </label>
    </div>
  );
};

export default BookmarkFilter;
