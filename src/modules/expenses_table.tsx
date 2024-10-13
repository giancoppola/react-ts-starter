import { useEffect } from "react";
import { ExpenseData, LoadingStatus } from "../global/types";
import { CapitaliseFirstLetter } from "../global/tools";

import LoadingSpinner from "./loading_spinner";

interface ExpensesTableProps {
    expensesData: Array<ExpenseData>;
    expensesFetchStatus: LoadingStatus;
    expensesFetchErrorMsg: string;
}
const ExpensesTable = (props: ExpensesTableProps) => {
    const months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    useEffect(() => {
        console.log(props.expensesFetchStatus);
        console.log(props.expensesData);
    }, [props.expensesData])
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
            { props.expensesFetchStatus === 'complete' && props.expensesData.length > 0 &&
                // Responsiveness isn't great here - with more time a better solution should be investigated
                <div className="expenses-container">
                    <table className="expenses-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Merchant</th>
                                <th>Status</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                            { props.expensesData.map((expenseData: ExpenseData) => {
                                const date = new Date(expenseData.date);
                                return (
                                <tr key={`row-eid-${expenseData.id}`}>
                                    <td>{`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</td>
                                    <td>{expenseData.merchant}</td>
                                    <td>
                                        <span className={`status status-${expenseData.status}`}>{
                                            CapitaliseFirstLetter(expenseData.status)
                                        }</span>
                                    </td>
                                    <td>{expenseData.description}</td>
                                    <td>{
                                        CapitaliseFirstLetter(expenseData.category)
                                    }
                                    </td>
                                    <td>{
                                        new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })
                                        .format(expenseData.amount)
                                    }
                                    </td>
                                </tr>
                            )})}
                            </>
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}

export default ExpensesTable