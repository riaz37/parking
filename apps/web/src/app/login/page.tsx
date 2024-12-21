import { LoginForm } from '@libs/ui/src/components/templates/LoginForm'
import { AuthLayout } from '@libs/ui/src/components/molecules/AuthLayout'

export default function Page() {
  return (
    <AuthLayout title={'Login'}>
      <LoginForm />
    </AuthLayout>
  )
}