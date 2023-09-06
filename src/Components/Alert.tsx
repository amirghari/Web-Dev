interface Props {
  children: string
  onClick: () => void
}

const Alert = ({ children, onClick }: Props) => {
  return (
    <div>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        {children}
        <button
          onClick={onClick}
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  )
}

export default Alert
