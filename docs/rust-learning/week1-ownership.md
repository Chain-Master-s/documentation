---
sidebar_position: 2
---

# Week 1: Ownership and Borrowing

## Overview
This week focuses on one of Rust's most unique and important features - the ownership system. Understanding ownership and borrowing is crucial for writing safe and efficient Rust code.

## Topics Covered
- Ownership Rules
- Borrowing & Referencing (mutable, immutable)
- Lifetimes

## Key Concepts

### Ownership Rules
1. Each value in Rust has a variable that's called its owner
2. There can only be one owner at a time
3. When the owner goes out of scope, the value will be dropped

### Borrowing & Referencing
- Immutable references (`&T`)
- Mutable references (`&mut T`)
- Rules of references:
  - One mutable reference XOR many immutable references
  - References must always be valid

### Lifetimes
- Lifetime annotations
- Lifetime elision
- Static lifetimes

## Project: CLI YellowPages
Build a command-line contact book that demonstrates:
- Ownership of contact data
- Borrowing for reading contacts
- Mutable borrowing for updating contacts

### Project Requirements
1. Add new contacts
2. View existing contacts
3. Update contact information
4. Delete contacts
5. Search functionality

### Learning Objectives
- Practice ownership concepts
- Implement borrowing patterns
- Handle string ownership
- Manage data structures with ownership rules

## Resources
- [Rust Book Chapter 4: Understanding Ownership](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)
- [Rust By Example: Ownership and Borrowing](https://doc.rust-lang.org/rust-by-example/scope.html)
