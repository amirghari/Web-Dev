interface expense {
  Id: number
  Description: string
  Amount: number
  Category: string
}

interface Props {
  Expenses: expense[]
  onDelete: (Id: number) => void
}

const ExpenseList = ({ Expenses, onDelete }: Props) => {
  if (Expenses.length === 0) {
    return null
  }
  return (
    <>
      <table className="mt-3 table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Expenses.map((expense) => (
            <tr key={expense.Id}>
              <td>{expense.Description}</td>
              <td>{expense.Amount}</td>
              <td>{expense.Category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense.Id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {Expenses.reduce(
                (acc, expense) => expense.Amount + acc,
                0,
              ).toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default ExpenseList
