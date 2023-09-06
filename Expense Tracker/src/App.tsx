import { useState } from 'react'
import './App.css'
import ExpenseList from './Components/Expense-list'
import ExpenseFilter from './Components/ExpenseFilter'
import ExpenseForm from './Components/ExpenseForm'

export const categories = ['Utilities', 'Entertainment', 'Groceries'] as const

function App() {
  const [selectedCategory, setSelectedCategory] = useState()
  const [items, setItems] = useState([
    { Id: 1, Description: 'kcbe', Amount: 188, Category: 'Utilities' },
    { Id: 2, Description: 'kcbe', Amount: 199, Category: 'Utilities' },
    { Id: 3, Description: 'kcbe', Amount: 19, Category: 'Utilities' },
    { Id: 4, Description: 'kcbe', Amount: 16, Category: 'Utilities' },
    { Id: 5, Description: 'kcbe', Amount: 15, Category: 'Entertainment' },
    { Id: 6, Description: 'kcbe', Amount: 67, Category: 'Entertainment' },
    { Id: 7, Description: 'kcbe', Amount: 17, Category: 'Entertainment' },
    { Id: 8, Description: 'kcbe', Amount: 17, Category: 'Entertainment' },
    { Id: 9, Description: 'kcbe', Amount: 1, Category: 'Groceries' },
    { Id: 10, Description: 'kcbe', Amount: 34, Category: 'Groceries' },
    { Id: 11, Description: 'kcbe', Amount: 5, Category: 'Groceries' },
    { Id: 12, Description: 'kcbe', Amount: 67, Category: 'Groceries' },
  ])
  const categoryHandler = (category: string) => setSelectedCategory(category)
  let visibleCategories = selectedCategory
    ? items.filter((item) => item.Category === selectedCategory)
    : items
  if (selectedCategory === 'All Categories') {
    visibleCategories = items
  }
  return (
    <>
      <ExpenseForm onSubmit={(data) => console.log(data)} />
      <ExpenseFilter onSelectCategory={categoryHandler} />
      <ExpenseList
        Expenses={visibleCategories}
        onDelete={(Id) => setItems(items.filter((item) => item.Id !== Id))}
      />
    </>
  )
}

export default App
