import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const arrayProblems = [
    { id: 1, title: "Find the Largest Element in an Array" },
    { id: 2, title: "Reverse an Array" },
    { id: 3, title: "Find Missing Number in Array" },
    { id: 4, title: "Find Duplicate in Array" },
    { id: 5, title: "Find Second Largest Element" },
    { id: 6, title: "Check if Array is Sorted" },
    { id: 7, title: "Rotate Array to Right" },
    { id: 8, title: "Find Intersection of Two Arrays" },
    { id: 9, title: "Sort Array in Ascending Order" },
    { id: 10, title: "Find Sum of Array Elements" },
    { id: 11, title: "Find Pair with Given Sum" },
    { id: 12, title: "Merge Two Sorted Arrays" },
    { id: 13, title: "Move Zeros to End" },
    { id: 14, title: "Find Maximum Product Subarray" },
    { id: 15, title: "Subarray with Given Sum" },
    { id: 16, title: "Find Longest Consecutive Sequence" },
    { id: 17, title: "Check if Two Arrays are Equal" },
    { id: 18, title: "Find Majority Element" },
    { id: 19, title: "Find Triplets with Given Sum" },
    { id: 20, title: "Find Missing Ranges in Array" },
  ];

  // const stringProblems = [
  //   { id: 1, title: "Reverse a String" },
  //   { id: 2, title: "Check if String is Palindrome" },
  //   { id: 3, title: "Find Longest Substring Without Repeating Characters" },
  //   { id: 4, title: "Count Vowels and Consonants in a String" },
  //   { id: 5, title: "Remove Duplicates from a String" },
  //   { id: 6, title: "Find First Non-Repeated Character" },
  //   { id: 7, title: "Check if Two Strings are Anagrams" },
  //   { id: 8, title: "Convert String to Integer (atoi)" },
  //   { id: 9, title: "Count Occurrences of a Character in a String" },
  //   { id: 10, title: "Check if String Contains All Unique Characters" },
  //   { id: 11, title: "Implement String Compression" },
  //   { id: 12, title: "Find the Longest Palindromic Substring" },
  //   { id: 13, title: "Implement Basic Calculator" },
  //   { id: 14, title: "Check if String is a Rotation of Another String" },
  //   { id: 15, title: "Find All Permutations of a String" },
  //   { id: 16, title: "Find the Frequency of Each Character in a String" },
  //   { id: 17, title: "Find the First Repeated Character in a String" },
  //   { id: 18, title: "Remove All Whitespaces from a String" },
  //   { id: 19, title: "Check if String is Subsequence of Another String" },
  //   { id: 20, title: "Find the Longest Prefix of a String" },
  // ];

  // const linkedListProblems = [
  //   { id: 1, title: "Reverse a Linked List" },
  //   { id: 2, title: "Detect a Cycle in a Linked List" },
  //   { id: 3, title: "Find the Middle Element of a Linked List" },
  //   { id: 4, title: "Merge Two Sorted Linked Lists" },
  //   { id: 5, title: "Remove Duplicates from a Linked List" },
  //   { id: 6, title: "Find the Nth Node from the End of a Linked List" },
  //   { id: 7, title: "Find the Length of a Linked List" },
  //   { id: 8, title: "Check if Linked List is Palindrome" },
  //   { id: 9, title: "Reverse K Nodes in a Linked List" },
  //   { id: 10, title: "Flatten a Linked List" },
  //   { id: 11, title: "Find the Intersection Point of Two Linked Lists" },
  //   { id: 12, title: "Sort a Linked List" },
  //   { id: 13, title: "Merge K Sorted Linked Lists" },
  //   { id: 14, title: "Detect a Loop in a Linked List" },
  //   { id: 15, title: "Rotate a Linked List" },
  //   { id: 16, title: "Add Two Numbers Represented by Linked Lists" },
  //   { id: 17, title: "Delete a Node from Linked List" },
  //   { id: 18, title: "Intersection of Two Linked Lists" },
  //   { id: 19, title: "Find the Union of Two Linked Lists" },
  //   { id: 20, title: "Find the Length of the Cycle in a Linked List" },
  // ];

  return (
    <div>
      <h2>Welcome to DSA Learning Hub</h2>
      <p>Master Data Structures and Algorithms Step by Step.</p>
      
      <h3>Array Problems</h3>
      <ul>
        {arrayProblems.map((problem) => (
          <li key={problem.id}>
            <Link to={`/problem/array/${problem.id}`}>{problem.title}</Link>
          </li>
        ))}
      </ul>

      {/* <h3>String Problems</h3>
      <ul>
        {stringProblems.map((problem) => (
          <li key={problem.id}>
            <Link to={`/problem/string/${problem.id}`}>{problem.title}</Link>
          </li>
        ))}
      </ul> */}

      {/* <h3>Linked List Problems</h3>
      <ul>
        {linkedListProblems.map((problem) => (
          <li key={problem.id}>
            <Link to={`/problem/linkedlist/${problem.id}`}>{problem.title}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Home;
