---
title: React Query
pageTitle: React Query - Rafty UI
description: React Query
---

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => axios.get("https://api.github.com/repos/tannerlinsley/react-query").then((res) => res.data),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p> {data.subscribers_count}</p> <p>{data.stargazers_count}</p>
      <p>{data.forks_count}</p>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}
```
