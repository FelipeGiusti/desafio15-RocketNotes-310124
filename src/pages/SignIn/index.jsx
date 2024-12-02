import { Container, Form, Background } from './style.js'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { SignIn } = useAuth();

  function handleSignIn(){
    event.preventDefault()
    SignIn({ email, password})
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salva e gerenciar suas notas.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">
          Criar conta
        </Link>
      </Form>
      <Background />
    </Container>
  )
}