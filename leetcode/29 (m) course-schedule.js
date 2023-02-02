/*
Course Schedule
Level: medium
Answer 1 : Bruth Force - o(p + n^3) s(n^2) - medium
Answer 2 : Topological Sort - o(p + n^2) s(n^2) - medium
Answer 3 : Topological Sort Without Adj List - o(p + n^2) s(n) - medium

https://leetcode.com/problems/course-schedule/
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.


#medium
*/

// o(p + n^3) s(n^2)
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinishBfs(numCourses, prerequisites) {
  const adjList = new Array(numCourses).fill(0).map((_) => []);
  for (let i = 0; i < prerequisites.length; i++) {
    const [child, parent] = prerequisites[i];
    adjList[parent].push(child);
  }
  for (let v = 0; v < numCourses; v++) {
    const q = [];
    const seen = {};
    for (let i = 0; i < adjList[v].length; i++) {
      q.push(adjList[v][i]);
    }
    while (q.length) {
      const current = q.shift();
      seen[current] = true;
      if (current === v) {
        return false;
      }
      const adj = adjList[current];
      for (let i = 0; i < adj.length; i++) {
        const next = adj[i];
        if (!seen[next]) {
          q.push(next);
        }
      }
    }
  }
  return true;
}

// o(p + n^2) s(n^2)
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinishTopologicalSort(numCourses, prerequisites) {
  const adjList = new Array(numCourses).fill(0).map((_) => []);
  const inDegree = new Array(numCourses).fill(0);
  for (let i = 0; i < prerequisites.length; i++) {
    const [child, parent] = prerequisites[i];
    adjList[parent].push(child);
    inDegree[child]++;
  }

  const stack = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }

  let count = 0;
  while (stack.length) {
    const nodeIndex = stack.pop();
    count++;
    const adjacent = adjList[nodeIndex];
    for (let i = 0; i < adjacent.length; i++) {
      const next = adjacent[i];
      inDegree[next]--;
      if (inDegree[next] === 0) {
        stack.push(next);
      }
    }
  }

  return count === numCourses;
}

// o(p + n^2) s(n)
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinishTopologicalSortWithoutAdjList(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);
  for (let i = 0; i < prerequisites.length; i++) {
    const [child] = prerequisites[i];
    inDegree[child]++;
  }

  const stack = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }

  let count = 0;
  while (stack.length) {
    const current = stack.pop();
    count++;
    for (let i = 0; i < prerequisites.length; i++) {
      const [child, parent] = prerequisites[i];
      if (parent === current) {
        inDegree[child]--;
        if (inDegree[child] === 0) {
          stack.push(child);
        }
      }
    }
  }

  return count === numCourses;
}
