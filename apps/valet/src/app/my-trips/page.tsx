'use client'
import { IsLoggedIn } from '@libs/ui/src/components/organisms/IsLoggedIn'
import { IsValet } from '@libs/ui/src/components/organisms/IsValet'
import { ValetTrips } from '@libs/ui/src/components/templates/ValetTrips'

export default function Page() {
  return (
    <main>
      <IsLoggedIn>
        {(uid) => (
          <IsValet uid={uid}>
            <ValetTrips uid={uid} />
          </IsValet>
        )}
      </IsLoggedIn>
    </main>
  )
}