# 🚀 Paymob Analytics Dashboard

A flexible and customizable table component built with React. It supports sorting, searching, and loading states, and is designed to be dropped into any analytics dashboard.


### 📷 Preview  
You can check out the [live demo here](https://reusable-table-paymob.vercel.app/)


## 📸 Screenshots
<img width="1898" height="872" alt="reusable-table" src="https://github.com/user-attachments/assets/c7b57ca3-80d5-4175-8c08-7a38d292f4d7" />

## ⚙️ Features

- 🔍 **Searchable** by search term
- ⬆️⬇️ **Sortable** by column (ascending/descending)
- ⏳ **Loading state** with overlay spinner (simulate)
- 😴 **Empty state** fallback
- 🎯 Clean separation of concerns via components & hooks

---

## 🧠 Design Decisions
- Modular structure: Each sub-feature (search, header, row, empty state, loader) is isolated into its own component for better reusability and maintainability.
- Single Source of State (via useTableData): All logic for sorting, filtering, and handling updates is centralized in a custom hook, keeping the UI layer clean and stateless.
- Debounced Search: Uses a custom debounce utility to delay search input, improving performance and avoiding unnecessary renders while typing.
- Less CSS with design tokens: Styling is done with Less using a central variables.less file, making it easy to theme or switch design systems consistently.
- Lucide Icons: Utilizes lightweight and elegant icon set for a modern UI, including spinners during loading state.
- Clean Empty State Design: Provides a visual fallback (EmptyState component) to gracefully handle and communicate when no data is found.
- **Clear Responsibility Boundaries**  
  - `TableHeader`: Handles column rendering and sorting.  
  - `TableRow`: Handles individual row rendering.  
  - `TableSearch`: Manages search input and emits changes.  
  - `LoadingWrapper`: Encapsulates loading logic and overlay spinner.  
  - `EmptyState`: Renders fallback UI for empty datasets.

---

## 🛠️ Technologies Used
- React
- Less
- Lucide React Icons
- Classnames (for conditional class toggling)

---
## ✅ Usage Example

```jsx
import Table from "@/components/Table/Table";

<Table
  data={data}
  headersConfig={{
    columnsConfig,
    searchable: true,
    sortable: true,
    rowKey: (row) => row.id
  }}
  title="My Transactions"
  onUpdateData={setData}
/>
```

## 📁 Folder Structure

```
src/
│
├── components/
│ └── Analytics/
│ ├── Stats/
│ ├── Analytics.jsx
│ ├── Analytics.less
│ ├── LoadingWrapper/
│ │ └── LoadingWrapper.jsx
│ └── Table/
│ ├── Table.jsx
│ ├── Table.less
│ └── Components/
│ ├── EmptyState/
│ ├── TableHeader/
│ ├── TableRow/
│ └── TableSearch/
│
├── constants/
│ └── analytics.js
│
├── hooks/
│ └── useTableData.js
│
├── styles/
│ ├── app.less
│ └── variables.less
│
├── utils/
│ ├── analytics.js
│ └── helpers.js
│
├── App.jsx
└── main.jsx
```


## 🛠️ Getting Started

1. **Install dependencies**
   ```bash
   npm install
2. **Start the development server**
  ```bash
  npm run dev
