import { useForm } from 'react-hook-form'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input
          id="Name"
          {...register('name', { required: true, minLength: 3 })}
          type="text"
          className="form-control"
          key={'name'}
        />
        {errors.name?.type === 'minLength' && (
          <p className="text-danger">There must be at least 3 characters</p>
        )}
        {errors.name?.type === 'required' && (
          <p className="text-danger">This field is empty.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="Age" className="label-form">
          Age
        </label>
        <input
          id="Age"
          {...register('age', { required: true, minLength: 3 })}
          type="number"
          className="form-control"
          key={'age'}
        />
        {errors.name?.type === 'required' && (
          <p className="text-danger">This field is empty.</p>
        )}
        {errors.name?.type === 'minLength' && (
          <p className="text-danger">There must be at least 3 characters</p>
        )}
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  )
}

export default Form
