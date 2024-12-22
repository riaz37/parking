"use client";
import { IsLoggedIn } from "@libs/ui/src/components/organisms/IsLoggedIn";
import { IsValet } from "@libs/ui/src/components/organisms/IsValet";
import { ValetHome } from "@libs/ui/src/components/templates/ValetHome";

export default function Home() {
  return (
    <main>
      <IsLoggedIn>
        {(uid) => (
          <IsValet uid={uid}>
            <ValetHome />
          </IsValet>
        )}
      </IsLoggedIn>
    </main>
  );
}
