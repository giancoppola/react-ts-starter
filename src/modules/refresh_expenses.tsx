interface RefreshExpensesProps {
    FetchExpensesData: Function;
}
const RefreshExpenses = (props: RefreshExpensesProps) => {
    return (
        <div>
            <button className="link-btn" onClick={() => props.FetchExpensesData()}>Refresh data</button>
        </div>
    )
}

export default RefreshExpenses