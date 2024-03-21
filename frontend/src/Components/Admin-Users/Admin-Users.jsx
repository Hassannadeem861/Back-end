import React, { useEffect, useState } from 'react';
import './AdminUsers.css';
import { useAuth } from '../../store/auth';
import { response } from 'express';

const AdminUsers = () => {
    const { AuthorizationToken } = useAuth();
    const [reportsData, setReportsData] = useState([]);

    const getAllUsersData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/admin/users`, {
                method: 'GET',
                headers: {
                    Authorization: AuthorizationToken
                }
            });
            const data = await response.json();
            setReportsData(data.users);
        } catch (error) {
            console.log("getAllUsersData error : ", error);
        }
    };

    // Delete User Logic 
    const deleteUser = async (id) => {
        try {
            const deleteResponse = await fetch(`http://localhost:8080/api/v1/admin/users/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: AuthorizationToken
                }
            })
            console.log("deleteResponse :", deleteResponse);
            const deleteData = await deleteResponse.json()
            console.log("deleteData :", deleteData);

            if (deleteResponse.status === 201) {
                getAllUsersData()
            }

        } catch (error) {
            console.log("deleteData Error :", error);

        }
    }

    useEffect(() => {
        getAllUsersData();
    }, []); // Empty dependency array to fetch data only once on component mount

    return (
        <div>
            <section className='admin-users-section'>
                <div className=''>
                    <h1>Get All Users Data</h1>
                </div>
                <table className='admin-users-table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportsData.map((currData, index) => (
                            <tr key={index}>
                                <td>{currData.id}</td>
                                <td>{currData.username}</td>
                                <td>{currData.email}</td>
                                <td><button>Edit</button></td>
                                <td><button onClick={() => {
                                    deleteUser(currData.id)
                                }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div >
    );
};

export default AdminUsers;
