import { useSelector } from "react-redux"
import Users from "../../components/users/Users"
import Empty from "../../components/empty/Empty"

const FollowUser = () => {
  let follow = useSelector(state => state.follow.value)
  return (
    <div className='all__users'>
      {
        follow.length ? <Users data={follow} /> : <Empty />
      }
    </div>
  )
}

export default FollowUser