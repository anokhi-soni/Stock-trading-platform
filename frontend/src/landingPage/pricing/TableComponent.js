import "./PricingPage.css"
function TableComponent({id, headings, tableContent_2D_arr}) {
    return ( 
        <table className="TableComponent" id={`${id}`}>
            <tr className="headerRow">
                {(tableContent_2D_arr[0].length === headings.length)? null : <th></th>} {/*Cuz for every table the 1st cell is always empty */}
                {headings.map((head)=><th>{head}</th>)}
            </tr>

            {tableContent_2D_arr.map((row)=>{
                return(
                    <tr className="normalRow">
                        {row.map((col_data) => <td>{col_data}</td>)}
                    </tr>
                )
            })}
        </table>
            
    );
}

export default TableComponent;