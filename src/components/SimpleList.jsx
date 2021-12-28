
export function SimpleList({listItems, allAreTasks}){
    return (
        <ul>
            {listItems.map((item) => {
                return <listItems text = {item} />
            })}
            hjol
        </ul>
    )
}