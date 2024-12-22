import { RegisterForm } from '@libs/ui/src/components/templates/RegisterForm'
import { AuthLayout } from '@libs/ui/src/components/molecules/AuthLayout'

export default function Page() {
  return (
    <AuthLayout title={'Register'}>
      <RegisterForm />
    </AuthLayout>
  )
}