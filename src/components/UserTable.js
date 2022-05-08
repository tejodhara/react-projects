import React from 'react'

function UserTable(props) {
  return (
    <div>
        {props.formData.map((user,idx)=>{
            return (
                <div key={idx}> 
                    <table>
                        <tbody>
                        <tr>
                             <td>{user.username}</td>
                             <td>{user.password}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )
        })}
    </div>
  )
}

export default UserTable