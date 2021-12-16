import React from "react";

interface NoResultsProps {
  search: string;
  error: string;
}

const NoResults: React.FC<NoResultsProps> = ({ search, error }) => {
  if (error) {
    return <h3>Something went wrong...</h3>;
  }
  return (
    <>
      {search ? (
        <h3>Your search yielded no results...</h3>
      ) : (
        <h3>Your movies will appear here!</h3>
      )}
    </>
  );
};

export default NoResults;
