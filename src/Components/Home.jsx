import React from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const Home = () => {
    const { token, username, isAuth } = React.useContext(AuthContext);
    const [userData, setUserData] = React.useState([]);
    // console.log(username)
    // const username = "man"

    React.useEffect(() => {
        if(isAuth){
            getData()
        }
    }, [])
    const getData = () => {
        fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((res) => res.json())
            .then((res) => setUserData(res))
            .catch((err) => console.log(err))
    }
    console.log(userData)
    // getData()

    // description: "manish"
// email: "manishhansalmeh@gmail.com"
// mobile: "08789767622"
// name: "Manish Kumar"
// token: "39c63ddb96a31b9610cd976b896ad4f0"
// username: "man"
  return (
    <div>
      {
          {/* userData.map((user) => {
              return <div>
                <h1>Your Profile</h1>
                <h2>Name: {user.name}</h2>
                <h2>Email: {user.email}</h2>
                <h2>Mobile: {user.mobile}</h2>
                <h2>Description: {user.description}</h2>
              </div>
          }) */}
      }
    </div>
  )
}

export {Home}
