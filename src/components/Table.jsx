import React from 'react'

export default function Table() {

    const FilterableTable  =  require ('react-filterable-table') ;
  
// Data for the table to display; can be anything
const data = [
	{ name: "Steve", age: 27, job: "Sandwich Eater" },
	{ name: "Gary", age: 35, job: "Falafeler" },
	{ name: "Greg", age: 24, job: "Jelly Bean Juggler" },
	{ name: "Jeb", age: 39, job: "Burrito Racer" },
	{ name: "Jeff", age: 48, job: "Hot Dog Wrangler" }
];

// Fields to show in the table, and what object properties in the data they bind to
const fields = [
	{ name: 'name', displayName: "Name", inputFilterable: true, sortable: true },
	{ name: 'age', displayName: "Age", inputFilterable: true, exactFilterable: true, sortable: true },
	{ name: 'job', displayName: "Occupation", inputFilterable: true, exactFilterable: true, sortable: true }
];

    return (
        <div>
                <FilterableTable
                    iconSort
                    namespace = "People" 
                    initialSort = "name" 
                    data={data}
                    fields = { fields } 
                    noRecordsMessage = "Il n'y a aucune personne à afficher" 
                    noFilteredRecordsMessage = "Aucune personne ne correspond à vos filtres !" 
                />
        </div>
    );
};

  

