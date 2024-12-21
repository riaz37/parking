import { RegisterForm } from '../../../../web/src//components//RegisterForm'
import { AuthLayout } from '@libs/ui/src/components/molecules/AuthLayout'

export default function Page() {
  return (
    <AuthLayout title={'Register'}>
      <RegisterForm />
    </AuthLayout>
  )
}