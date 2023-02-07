/*
Time Needed to Inform All Employees
Level: medium
o(n) s(n) - medium

https://leetcode.com/problems/time-needed-to-inform-all-employees/
A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID.

Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that the subordination relationships have a tree structure.

The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news.

The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).

Return the number of minutes needed to inform all the employees about the urgent news.

#medium
*/

function dfs(node, graph) {
  const [nodeIndex, nodeWeight] = node;
  let weight = 0;
  if (!graph[nodeIndex]) return nodeWeight;
  for (let i = 0; i < graph[nodeIndex].length; i++) {
    console.log(weight);
    const nextNode = graph[nodeIndex][i];
    const [_, nextNodeWeight] = nextNode;
    weight = Math.max(weight, dfs(nextNode, graph) + nextNodeWeight);
  }
  return weight;
}

// o(n) s(n)
/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
function numOfMinutes(n, headID, manager, informTime) {
  let graph = {};
  graph[headID] = [];
  for (let node = 0; node < n; node++) {
    const value = [node, informTime[node]];
    if (graph[manager[node]]) {
      graph[manager[node]].push(value);
    } else {
      graph[manager[node]] = [value];
    }
  }
  return dfs(graph[-1][0], graph) + graph[-1][0][1];
}