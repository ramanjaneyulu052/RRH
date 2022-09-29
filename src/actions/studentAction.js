import axios from 'axios'
const url ="http://localhost:3001/users"

export default function StudentAction()
{
    return ({
        type: 'StudentAction',
        payload:axios.get(url).then((result) => result.data)
    })
}