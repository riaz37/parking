import { IsAdmin } from '@libs/ui/src/components/organisms/IsAdmin'
import { AdminHome } from '@libs/ui/src/components/templates/AdminHome'

export default function Home() {
  return (
    <main>
      <IsAdmin>
        <AdminHome />
      </IsAdmin>
    </main>
  )
}