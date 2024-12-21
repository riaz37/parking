import { ListCustomerBookings } from '@libs/ui/src/components/templates/ListCustomerBookings'
import { IsLoggedIn } from '@libs/ui/src/components/organisms/IsLoggedIn'

export default function Page() {
  return (
    <IsLoggedIn>
      <ListCustomerBookings />
    </IsLoggedIn>
  )
}