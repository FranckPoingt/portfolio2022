import React from 'react'
import { Button, Stack, Text, Textarea, TextInput, Title } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { openModal, closeAllModals } from '@mantine/modals'
import { z } from 'zod'
import JSConfetti from 'js-confetti'

const schema = z.object({
  name: z.string().max(50),
  company: z.string().max(50),
  email: z.string().email({ message: 'Invalid email' }),
  message: z.string().min(1).max(1000, { message: 'Message is too long' })
})

const ContactModal = () => {
  const form = useForm({
    validate: zodResolver(schema),
    validateInputOnBlur: true,
    validateInputOnChange: true,
    initialValues: {
      name: '',
      company: '',
      email: '',
      message: ''
    }
  })

  const handleSubmit = async (values) => {
    const response = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    if (response.ok) {
      form.reset()
      openModal({
        title: <Title order={1}>Message sent 🚀</Title>,
        centered: true,
        withCloseButton: false,
        radius: 'md',
        children: <>
          <Text>Thank you for your interest, I will get back to you as soon as possible.</Text>
        </>
      })
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti({
        emojis: ['🚀', '🥳', '🎉', '❤️', '🦄'],
        confettiNumber: 100,
        emojiSize: 30
      })
      setTimeout(() => {
        jsConfetti.addConfetti({
          emojis: ['🏅', '🎖️', '🏆', '💌'],
          confettiNumber: 100,
          emojiSize: 30
        })
      }, 500)

      setTimeout(() => {
        closeAllModals()
        jsConfetti.clearCanvas()
      }
        , 4000)
    }
  }

  return (
    <div>
      <Stack spacing="sm">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/contact"
          onSubmit={form.onSubmit(values => {
            handleSubmit(values)
          })}>
          <input type="hidden" name="form-name" value="contact" />
          <TextInput
            name="name"
            placeholder="Your name"
            radius="md"
            size="md"
            py="sm"
            {...form.getInputProps('name')}
          />
          <TextInput
            name="company"
            placeholder="Your company"
            radius="md"
            size="md"
            py="sm"
            {...form.getInputProps('company')}
          />
          <TextInput
            name="email"
            placeholder="Your email"
            radius="md"
            size="md"
            py="sm"
            {...form.getInputProps('email')}
          />
          <Textarea
            name="message"
            placeholder="Your message"
            radius="md"
            withAsterisk
            autosize
            minRows={3}
            py="sm"
            {...form.getInputProps('message')}
          />
          <Button type="submit" fullWidth mt="sm">
            Send
          </Button>
        </form>
      </Stack>
    </div>
  )
}

export default ContactModal