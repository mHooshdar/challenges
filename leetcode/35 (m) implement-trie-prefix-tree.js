/*
Implement Trie Prefix Tree
Level: medium
Answer : o(n) s(n) - medium

https://leetcode.com/problems/implement-trie-prefix-tree/
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

#medium
*/

function TrieNode() {
  this.keys = {};
  this.end = false;
}

function Trie() {
  this.root = new TrieNode();
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let currentNode = this.root;
  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    if (!currentNode.keys[char]) {
      const newNode = new TrieNode();
      currentNode.keys[char] = newNode;
      currentNode = newNode;
    } else {
      currentNode = currentNode.keys[char];
    }
  }
  currentNode.end = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let currentNode = this.root;
  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    if (!currentNode.keys[char]) {
      return false;
    } else {
      currentNode = currentNode.keys[char];
    }
  }
  return currentNode.end;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let currentNode = this.root;
  for (let i = 0; i < prefix.length; i++) {
    const char = prefix.charAt(i);
    if (!currentNode.keys[char]) {
      return false;
    } else {
      currentNode = currentNode.keys[char];
    }
  }
  return true;
};
