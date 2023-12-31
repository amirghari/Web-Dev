import { categories } from '../App'

interface Props {
  onSelectCategory: (category: string) => void
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <>
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="All Categories" className="form-option">
          All Categories
        </option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  )
}

export default ExpenseFilter
