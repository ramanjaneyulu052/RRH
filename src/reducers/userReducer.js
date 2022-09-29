export default function userReducer(state = [], action)
{
    //yes / or -> conditional statements...
    switch (action.type)
    {
        case 'UsersAction':
      return action.payload; break;
      default : return state
    }
} 
