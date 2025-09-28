# 📘 React Prop Drilling

## 🔹 What is Prop Drilling?
Prop Drilling का मतलब है जब हम **parent component से child component तक data (props)** भेजते हैं, और वह data बीच के multiple components से होकर जाता है – भले ही उन्हें उस data की ज़रूरत न हो।  

👉 इससे code लंबा, messy और maintain करना मुश्किल हो जाता है।  

---

## 🔹 Example of Prop Drilling

```jsx
import React from "react";

const ChildC = ({ user }) => {
  return <h2>Welcome, {user}!</h2>;
};

const ChildB = ({ user }) => {
  return <ChildC user={user} />;
};

const ChildA = ({ user }) => {
  return <ChildB user={user} />;
};

const App = () => {
  const user = "Arun"; // main data

  return (
    <div>
      <h1>React Prop Drilling Example</h1>
      <ChildA user={user} />
    </div>
  );
};

export default App;
```

### 👉 Output
```
React Prop Drilling Example
Welcome, Arun!
```

यहाँ `user` prop हर component से होकर `ChildC` तक गया है, जबकि असल में उसे सिर्फ `ChildC` को चाहिए था।  
इसी process को **Prop Drilling** कहते हैं।

---

## 🔹 Problem with Prop Drilling
- Unnecessary props को बार-बार pass करना पड़ता है  
- Code messy और difficult हो जाता है  
- Scalability पर असर पड़ता है  

---

## 🔹 Solutions to Avoid Prop Drilling

### 1. React Context API  
Centralized data store बनाकर किसी भी component को directly data देना  

```jsx
import React, { createContext, useContext } from "react";

const UserContext = createContext();

const ChildC = () => {
  const user = useContext(UserContext);
  return <h2>Welcome, {user}!</h2>;
};

const ChildB = () => <ChildC />;
const ChildA = () => <ChildB />;

const App = () => {
  const user = "Arun";

  return (
    <UserContext.Provider value={user}>
      <h1>Using Context API</h1>
      <ChildA />
    </UserContext.Provider>
  );
};

export default App;
```

---

### 2. State Management Libraries
- Redux  
- Zustand  
- Jotai  
- Recoil  

जब data बहुत बड़ा और complex हो तो इनका use करना चाहिए।  

---

## 🔹 When to Avoid Prop Drilling?
- जब same data कई deeply nested components को चाहिए  
- जब बार-बार props pass करने से code messy हो रहा हो  

---

## 🔹 When Prop Drilling is OK?
- जब केवल **1-2 levels deep** तक props pass करने की ज़रूरत हो  
- Simple apps में  

---

✅ **In short:**  
Prop Drilling का मतलब बार-बार props को forward करना है। छोटे apps में ये ठीक है, लेकिन बड़े apps में **Context API या State Management Library** use करना best होता है।  
