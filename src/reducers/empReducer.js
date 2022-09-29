export default function empReducer(state = [], action)
{
    //yes / or -> conditional statements...
    switch (action.type)
    {
      case 'EmpAction':
      return action.payload; break;
      default : return state
    }
}