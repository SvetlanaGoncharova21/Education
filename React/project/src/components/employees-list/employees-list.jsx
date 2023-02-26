import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data }) => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem name="John" salary={800} />
      <EmployeesListItem name="Alex" salary={3000} />
      <EmployeesListItem name="Carl" salary={5000} />
    </ul>
  );
};

export default EmployeesList;
