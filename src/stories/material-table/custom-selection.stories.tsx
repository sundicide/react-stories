import React from 'react';
import MaterialTable from "material-table";
import { linkTo } from '@storybook/addon-links';
import * as d3 from "d3";

export default {
  title: 'Material-Table'
};

export const CustomSelection = () => {
  const [selectedRowData, setSelectedRowData] = React.useState(null);
  const [selectedTr, setSelectedTr] = React.useState(null);

  function rowClick(event, rowData) {
    if (selectedTr) {
      selectedTr.style("background-color", "");
    }

    const td = d3.select(event.target);
    const tr = d3.select(td.node().parentNode);
    tr.style("background-color", "rgb(253, 224, 234)");
    console.log("tr", tr)
    setSelectedTr(tr);
    setSelectedRowData(rowData);
  }

  return (
    <MaterialTable
      title="Custom Selection Preview"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]}
      onRowClick={rowClick}
    />
  )
}
