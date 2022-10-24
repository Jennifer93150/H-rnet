import DataTable from 'react-data-table-component';
import { useSelector } from "react-redux";

export default function DatasTable() {
    let firstname = useSelector((state) => state.firstName);
    let lastname = useSelector((state) => state.lastName);
    let dateBirth = useSelector((state) => state.dateBirth);
    let startDate = useSelector((state) => state.startDate);
    let street = useSelector((state) => state.street);
    let city = useSelector((state) => state.city);
    let state = useSelector((state) => state.pays);
    let zipCode = useSelector((state) => state.zipCode);
    let department = useSelector((state) => state.department);

    const columns = [
        {
            name: 'Nom',
            selector: row => row.lastname,
        },
        {
            name: 'Prénom',
            selector: row => row.firstname,
        },
        {
            name: 'Date de naissance',
            selector: row => row.dateBirth,
        },
        {
            name: 'Date de début',
            selector: row => row.startDate,
        },
        {
            name: 'Rue',
            selector: row => row.street,
        },
        {
            name: 'Ville',
            selector: row => row.city,
        },
        {
            name: 'Pays',
            selector: row => row.state,
        },
        {
            name: 'Code postal',
            selector: row => row.zipCode,
        },
        {
            name: 'Département',
            selector: row => row.department,
        },
    ];
    
    const data = [
        {
            firstname: firstname,
            lastname: lastname,
            dateBirth: dateBirth,
            startDate: startDate,
            street: street,
            city: city,
            state: state,
            zipCode: zipCode,
            department: department
        },
    ]

    return (
        
        <DataTable
            columns={columns}
            data={data}
        />
       
       
        
    );
};