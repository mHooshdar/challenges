/*
Network Delay Time
Level: medium
Answer 1 : Dijkstra (positive weights) - o(e * log n) s(e + n) - medium
Answer 2 : Bellman Ford (negative weights without negative cycle) - o(n * 3) s(n) - medium

https://leetcode.com/problems/network-delay-time/
You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

#medium
*/

// o(e * log n) s(e + n)
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function networkDelayTimeDijkstra(times, n, k) {
  let weights = {};
  const seen = {};
  const adjList = new Array(n + 1).fill(0).map((_) => []);
  for (let i = 0; i < times.length; i++) {
    const [parent, child, weight] = times[i];
    adjList[parent].push([child, weight]);
  }
  let current = k;
  let next = k;
  weights[current] = 0;
  let min = Infinity;
  while (Object.keys(seen).length !== n) {
    min = Infinity;
    current = next;
    Object.entries(weights).forEach(([k, v]) => {
      if (v < min && !seen[k]) {
        current = k;
        min = v;
      }
    });
    for (let i = 0; i < adjList[current].length; i++) {
      const [node, weight] = adjList[current][i];
      if (
        weights[node] === undefined ||
        weights[node] > weight + weights[current]
      ) {
        weights[node] = weight + weights[current];
      }
    }
    if (seen[current] === true) {
      break;
    }
    seen[current] = true;
  }
  if (Object.keys(seen).length !== n) {
    return -1;
  }
  return Math.max(...Object.values(weights));
}

// o(n * e) s(n)
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function networkDelayTimeBellmanFord(times, n, k) {
  let weights = {};
  weights[k] = 0;
  for (let i = 0; i < n - 1; i++) {
    let changed = false;
    for (let j = 0; j < times.length; j++) {
      const [parent, child, weight] = times[j];
      if (
        weights[parent] !== undefined &&
        (weights[child] === undefined ||
          weights[child] > weights[parent] + weight)
      ) {
        weights[child] = weights[parent] + weight;
        changed = true;
      }
    }
    if (!changed) {
      break;
    }
  }
  if (Object.keys(weights).length !== n) {
    return -1;
  }
  return Math.max(...Object.values(weights));
}
