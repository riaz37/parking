import { ManageValets } from '@libs/ui/src/components/templates/ManageValets'
import { IsLoggedIn } from '@libs/ui/src/components/organisms/IsLoggedIn'

export default function Page() {
  return (
    <IsLoggedIn>
      <ManageValets />
    </IsLoggedIn>
  )
}