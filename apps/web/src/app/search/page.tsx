'use client'
import { SearchPage } from '@libs/ui/src/components/templates/SearchPage'
import { FormProviderSearchGarage } from '@libs/forms/src/searchGarages'

export default function Page() {
  return (
    <FormProviderSearchGarage>
      <SearchPage />
    </FormProviderSearchGarage>
  )
}