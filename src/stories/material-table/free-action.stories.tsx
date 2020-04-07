import React from 'react';
import MaterialTable from "material-table";
import { linkTo } from '@storybook/addon-links';
import * as d3 from "d3";

export default {
  title: 'Material-Table'
};

export const CustomAction = () => {
  return (
    <MaterialTable
      title="Free Action Preview"
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
      actions={[
        {
          icon: 'add',
          tooltip: 'Add User',
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row")
        }
      ]}
    />
  )
}
