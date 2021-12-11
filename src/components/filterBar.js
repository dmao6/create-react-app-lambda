import React, { useState } from "react";
import "./ticketList.css"

const FilterBar = ({statuses, onNameFilter, onStatusFilter, onDateFilter}) => {
    const [filters, setFilters] = useState({
        name: "",
        status: "",
        from: "",
        to: ""
    });

    const handleChange = (field) => (e) => {
        const {value} = e.target;
        setFilters({
            ...filters,
            [field]: value,
        });
        switch (field) {
            case "name":
                onNameFilter(value);
                break;
            case "status":
                onStatusFilter(value);
                break;
            case "from":
                onDateFilter(value, "from");
                break;
            case "to":
                onDateFilter(value, "to");
                break;
            default:
                break;
        }
    };
   
    return(
        <div className="row my-5 ticketTable">
            <div className="col">
                <b><h5 className="border-bottom">Filters</h5></b>
            </div>  
            <div className="col-sm-12 my-2">
                <label htmlFor="name">Requested by</label>
                <input
                    type="text"
                    className="form=control"
                    id="name"
                    onChange={handleChange("name")}
                />
            </div>
            <div className="col-sm-12 my-2">
                <label htmlFor="status">Status</label>
                <select className="form-control" id="status" onChange={handleChange("status")}>
                    {statuses.map((status) => (
                        <option value={status} key={status}>
                            {status}
                        </option>
                    ))}
                </select>
            </div>

            <div className="col-sm-12 my-2">
                <label htmlFor="startDate">From</label>
                <input type="date" className="form-control" id="startDate"  onChange={handleChange("from")}/>
            </div>

            <div className="col-sm-12 my-2">
                <label htmlFor="endDate">To</label>
                <input type="date" className="form-control" id="endDate"  onChange={handleChange("to")}/>
            </div>

        </div>
    );
}

export default FilterBar