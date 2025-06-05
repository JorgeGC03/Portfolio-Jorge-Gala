import { useForm } from '@formspree/react'
import { useEffect } from 'react'
import { toast } from "@/hooks/use-toast"

export const useContactForm = () => {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'xldndvle'
  const [state, handleSubmit] = useForm(formId)

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "¡Mensaje enviado!",
        description: "Tu mensaje ha sido enviado correctamente. Te responderé lo antes posible.",
      })
    }
    if (state.errors) {
      toast({
        title: "Error",
        description: "Hubo un problema enviando el mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    }
  }, [state.succeeded, state.errors])

  return {
    state,
    handleSubmit,
  }
} 