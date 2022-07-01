import React, { useState, useRef, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const MyAgGridPractice = () => {

    const gridRef = useRef();
    const [columnDefs, setColumnDefs] = useState([
        { field: "RTO", headerName: "RTO", checkboxSelection: true, headerCheckboxSelection: true, },
        { field: "Vehicle_Type", headerName: "Vehicle Type", },
        { field: "Vehicle_subtype", headerName: "Vehicle subtype ", },
        { field: "Public_Private", headerName: " Public/Private", },
        { field: "Insurer_name", headerName: "Insurer name", },
        { field: "Total_Business", headerName: "Total Business", },
        { field: "CC", headerName: "CC ", },
        { field: "Tonnage", headerName: "Tonnage", },
        { field: "Fuel_type", headerName: "Fuel Type", },
        { field: "Policy_Type", headerName: "Policy Type", },
        { field: "Discount", headerName: "Discount", },
        { field: "Ownership", headerName: "Ownership", },
        { field: "NCB", headerName: "NCB", },
        { field: "New_Old", headerName: "New/ Old", },
        { field: "Vehicle_Company", headerName: "Vehicle Company", },
        { field: "Agent_Slab", headerName: "Agent Slab", },
    ]);

    const [rowData, setRowData] = useState([
        {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        }, {
            RTO: "",
            Vehicle_Type: "",
            Vehicle_subtype: "",
            Public_Private: "",
            Insurer_name: "",
            Total_Business: "",
            CC: "",
            Tonnage: "",
            Fuel_Type: "",
            Policy_Type: "",
            Discount: "",
            Ownership: "",
            NCB: "",
            New_Old: "",
            Vehicle_Company: "",
            Agent_Slab: "",
        },
    ])

    const defaultColDef = useMemo(() => {
        return {
            flex: 2,
            editable: true,
            resizable: true,
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
        };
    }, []);


    return (
        <div>
            <div className="ag-theme-alpine" style={{ width: 2048, height: 1024 }}>

                <AgGridReact
                    ref={gridRef}
                    columnHoverHighlight={true}
                    rowData={rowData}
                    cellEditorPopup={true}
                    columnDefs={columnDefs}
                    enableFillHandle={true}
                    animateRows={true}
                    rowSelection='multiple'
                    // enableCellTextSelection={true}     //--------------------full row selected when column select
                    defaultColDef={defaultColDef}
                    enableRangeSelection={true}
                    enableRangeHandle={true}
                    // sideBar={sideBar}
                    suppressMultiRangeSelection={true}
                    rowGroupPanelShow={'always'}
                    pivotPanelShow={'always'}
                />
            </div>
            <button onClick={((e) => {
                setRowData(rowData)
                console.log('rowData', rowData)
            })}>Submit</button>
        </div>
    );
};
export default MyAgGridPractice;