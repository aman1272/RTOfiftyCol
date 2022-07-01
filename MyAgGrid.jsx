import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import { useDropzone } from 'react-dropzone'



const MyAgGrid = () => {

    const gridRef = useRef();
    const [columnDefs, setColumnDefs] = useState([
        { field: 'make', headerName: 'Name', checkboxSelection: true, headerCheckboxSelection: true, },
        { field: 'model', },
        { field: 'price', headerName: 'Price' },
        { field: 'model' },
        { field: 'price', headerName: 'Price' },
        { field: 'model' },
        { field: 'price', headerName: 'Price' },
        { field: 'model' },
        { field: 'price', headerName: 'Price' },
        { field: 'model' },
        { field: 'price', headerName: 'Price' },
        { field: 'model' },
        { field: 'price', headerName: 'Price' },
        { field: 'model' },
        { field: 'price', headerName: 'Price' },
    ]);
    const [rowData, setRowData] = useState([
        // { make: 'Dian', model: 20, price: "" },
        // { make: 'Max', model: 22, price: "" },
        // { make: 'David', model: 25, price: "" },
        // { make: 'Stephan', model: 19, price: "" },
        // { make: 'Bravis', model: 18, price: "" },
    ])
    // const upCol = [{
    //     listValues: [{ label: 'comprehensive' }, { label: '3 thirdParty' }, { label: 'ownDamage' }],
    //     lebel: 'Update 1stCol'
    // },
    // {
    //     listValues: [{ label: 'Peter' }, { label: 'Michael' }, { label: 'Lewis' }],
    //     lebel: 'Update 2ndCol'
    // }
    // ]
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            editable: true,
            resizable: true,
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
        };
    }, []);
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
            .then(result => result.json())
            .then(rowData => setRowData(rowData));
    }, []);
    // const makeEditor = () => {

    //     return (
    //         <div>
    //             <select style={{ width: "10 rem" }}>
    //                 <option value="Toyota">Toyota</option>
    //                 <option value="Ford">Ford</option>
    //                 <option value="Porsche">Porsche</option>
    //             </select>
    //         </div>
    //     );
    // }

    // const sideBar = useMemo <
    //     SideBarDef | string | string[] | boolean | null
    //      (() => {
    //         return {
    //             toolPanels: ['columns'],
    //         };
    //     }, []);

    return (
        <div>
            <div className="ag-theme-alpine" style={{ width: 1400, height: 635 }}>

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
        </div>
    );
};
export default MyAgGrid;