# TypeScript Interview Questions & Answers

## 1. What is TypeScript?

**Answer:**
TypeScript is a superset of JavaScript that adds type safety. It helps developers catch errors before running the code.

---

## 2. Why do we use TypeScript?

**Answer:**

* It is an industry standard.
* It catches errors early.
* It improves code readability.

---

## 3. What is type safety?

**Answer:**
Type safety means assigning a specific data type to variables so that TypeScript can prevent invalid operations.

---


## 4. What is the difference between `any` and `unknown`?

**Answer:**

* `any` disables type checking.
* `unknown` is safer because you must check its type before using it.

---

## 5. What is an interface?

**Answer:**
An interface defines the structure (shape) of an object.

**Example:**

```ts
interface User {
  name: string;
  age: number;
}
```

---

## 6. What is a type alias?

**Answer:**
A type alias creates a custom type using the `type` keyword.

**Example:**

```ts
type User = {
  name: string;
  age: number;
};
```

---

## 7. What is the difference between `type` and `interface`?

**Answer:**

* Both define object shapes.
* `interface` supports declaration merging.
* `type` can also represent unions, tuples, and primitive aliases.

---

## 8. What is an optional property?

**Answer:**
An optional property may or may not exist in an object.

**Example:**

```ts
type User = {
  name: string;
  age?: number;
};
```

---

## 9. What is a readonly property?

**Answer:**
A readonly property cannot be changed after the object is created.

**Example:**

```ts
type User = {
  readonly id: number;
  name: string;
};
```

---

## 10. What does TypeScript compile into?

**Answer:**
TypeScript is compiled into plain JavaScript, which browsers and Node.js can run.
