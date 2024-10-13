interface TitleBarProps {
    children: React.ReactNode;
}
const TitleBar = (props: TitleBarProps) => {
    return (
        <div className="title-bar">
            <h1 className="title-bar__title">Expenses</h1>
            {props.children}
        </div>
    )
}

export default TitleBar