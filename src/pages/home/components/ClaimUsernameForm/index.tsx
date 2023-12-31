import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './style'
import { ArrowRight } from 'phosphor-react'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput
        size="sm"
        prefix="calendarcall.com/"
        placeholder="seu-usuario"
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
