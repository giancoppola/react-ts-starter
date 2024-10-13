import { ExpenseData, LoadingStatus } from "../global/types";
import LoadingSpinner from "./loading_spinner";

interface ExpensesTableProps {
    expensesData: Array<ExpenseData>;
    expensesFetchStatus: LoadingStatus;
    expensesFetchErrorMsg: string;
}
const ExpensesTable = (props: ExpensesTableProps) => {
    return (
        <>
            { props.expensesFetchStatus === 'loading' &&
                <div className="loading-section flex-center-col">
                    <LoadingSpinner/>
                    <p>Loading data...</p>
                </div>
            }
            { props.expensesFetchStatus === 'failed' &&
                <div className="loading-section flex-center-col">
                    <p>Data fetch failed!</p>
                    <p>{props.expensesFetchErrorMsg}</p>
                    <p>Please try again</p>
                </div>
            }
            { props.expensesFetchStatus === 'complete' &&
                <div className="loading-section flex-center-col">
                    <p>Data fetch failed!</p>
                    <p>{props.expensesFetchErrorMsg}</p>
                    <p>Please try again</p>
                </div>
            }
        </>
    )
}

export default ExpensesTable