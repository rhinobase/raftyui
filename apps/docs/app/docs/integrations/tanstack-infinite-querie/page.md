---
title: Tanstack Infinite Querie
pageTitle: Infinite Querie - Rafty UI
description: Tanstack Infinite Querie
---

## Import

Rendering lists that can additively "load more" data onto an existing set of data or "infinite scroll" is also a very common UI pattern.

```jsx
import { useInfiniteQuery } from "@tanstack/react-query";
import { Button } from "@rafty/ui";
function Projects() {
  const fetchProjects = async ({ pageParam = 0 }) => {
    const res = await fetch("/api/projects?cursor=" + pageParam);
    return res.json();
  };

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      {data.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.data.map((project) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </React.Fragment>
      ))}
      <div>
        <Button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load More" : "Nothing more to load"}
        </Button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}
```
