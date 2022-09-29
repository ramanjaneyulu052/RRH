export default function studentReducer(state = [], action)
{
    //yes / or -> conditional statements...
    switch (action.type)
    {
        case 'StudentAction':
      return action.payload ; break;
      default : return state
    }
}