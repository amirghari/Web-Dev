import { categories } from '../App'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
  onSubmit: (data: ExpenseFormData) => void
}

const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z
    .number({ invalid_type_error: 'Amount is required.' })
    .min(0)
    .max(100_000),
  category: z.enum(['Utilities', 'Entertainment', 'Groceries']),
})
type ExpenseFormData = z.infer<typeof schema>

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) })
  return (
    <>
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <input
          type="text"
          {...register('description')}
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          {...register('amount', { valueAsNumber: true })}
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="Categories" className="form-label">
          Categories
        </label>
        <select className="mb-3 form-select">
          <option
            value="All Categories"
            {...register('category')}
            className="form-option"
          >
            All Categories
          </option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button
        onSubmit={handleSubmit(onSubmit)}
        className="mb-3 btn btn-primary"
      >
        Submit
      </button>
    </>
  )
}

export default ExpenseForm
