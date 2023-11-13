import React, { useMemo } from "react";

function Articles({ articles, sortingType }) {
  const sortedArticles = useMemo(() => {
    if (sortingType === 0) {
      articles.sort((a, b) => b.upvotes - a.upvotes);
    } else {
      articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return articles;
  }, [articles, sortingType]);

  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedArticles.map(({ title, upvotes, date }, index) => {
            return (
              <tr data-testid="article" key={index}>
                <td data-testid="article-title">{title}</td>
                <td data-testid="article-upvotes">{upvotes}</td>
                <td data-testid="article-date">{date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
