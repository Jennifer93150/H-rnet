import { Link } from "react-router-dom";

/** styles */
import styled from "styled-components";

const FilterableTableContainer = styled.div`
    background: #85b281;
    border-radius: 15px;
    margin: 50px auto;
    padding:30px;
    width: 80%;
`;

export default function DataTable() {
  
    let dataStringify = localStorage.getItem('root');
    let dataParse = JSON.parse(dataStringify);

    const  FilterableTable  =  require ( 'react-filterable-table' ) ;
  
    const  fields = [ 
        { name : 'firstName' , displayName : "FirstName" , inputFilterable : true , sortable : true } ,
        { name : 'lastName' ,  displayName : "LastName" ,  inputFilterable : true ,  exactFilterable : true ,  sortable : true  },
        { name : 'dateBirth' ,  displayName : "Date birth" ,  inputFilterable : true ,  exactFilterable : true ,  sortable : true  } ,
        { name : 'startDate' ,  displayName : "Start date" ,  inputFilterable : true ,  exactFilterable : true ,  sortable : true  } ,
        { name : 'street' ,  displayName : "Street" ,  inputFilterable : true ,  exactFilterable : true ,  sortable : true  } ,
        { name : 'state' ,  displayName : "State" ,  inputFilterable : true ,  exactFilterable : true ,  sortable : true  },
        { name : 'city' ,  displayName : "City" ,  inputFilterable : true ,  exactFilterable : true ,  sortable : true  },
        { name : 'zipCode' ,  displayName : "ZipCode" ,  inputFilterable : true ,  exactFilterable : true ,  sortable : true  },
        { name : 'department' ,  displayName : "Department" ,  inputFilterable : true ,  exactFilterable : true ,  sortable : true  } ,
    ] ;

    return (
        <FilterableTableContainer>
            {dataParse ? (
                < FilterableTable 
                    iconSort
                    namespace = "People" 
                    initialSort = "name" 
                    data={dataParse}
                    fields = { fields } 
                    noRecordsMessage = "Il n'y a aucune personne à afficher" 
                    noFilteredRecordsMessage = "Aucune personne ne correspond à vos filtres !" 
                />
                
            ):(
            <div>
                <p>Il n'y a aucune personne à afficher</p>
                <hr />
                <Link to="/" className="text-decoration-none">Ajouter un employé</Link>
            </div>
            )}
            <Link to="/" className="text-decoration-none">Retour</Link>
        </FilterableTableContainer>
    );
};
