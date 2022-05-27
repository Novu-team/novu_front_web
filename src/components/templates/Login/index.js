import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import Form from '../../atoms/Form'
import Error from '../../atoms/Error'
import Input from '../../atoms/Input'
import Title from '../../atoms/Title'
import Button from '../../atoms/Button'
import authErrorSelector from '../../../redux/selectors/authError'
import { loginUser } from '../../../redux/slices/authentication'

const loginSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required()
})

const StyledInput = styled(Input)`
  margin: 8px;
  width: 200px;
`

const StyledButton = styled(Button)`
  margin: 8px;
`

const ContainerRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  padding: 40px;
  background: #FFF;
  display: flex;
  border-radius: 24px;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  flex: 1;
  flex-grow: inherit;
  box-shadow: 0 3px 6px 0 rgba(51, 102, 204, 0.15);
`

const Container2 = styled.div`
  display: flex;
  margin-bottom: 40px;
`

const CenteredTitle = styled(Title)`
  margin-bottom: 40px;
  white-space: nowrap;
`

const StyledForm = styled(Form)`
  margin-left: 24px;
`

const Login = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const authError = useSelector(authErrorSelector)

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: (values) => dispatch(loginUser(values))
  })

  return (
    <ContainerRoot>
      <Container>
        <CenteredTitle color='blue'>{t('LOGIN.title')}</CenteredTitle>
        <Container2>
          <StyledForm>
            <Error error={authError}/>
            <StyledInput
              type='text'
              name='username'
              error={!!get(errors, 'username')}
              label='COMMON.username'
              value={get(values, 'username')}
              onChange={handleChange} />
            <StyledInput
              type='password'
              name='password'
              error={!!get(errors, 'password')}
              label='COMMON.password'
              value={get(values, 'password')}
              onChange={handleChange} />
            <StyledButton onClick={handleSubmit}>{t('COMMON.validate')}</StyledButton>
          </StyledForm>
        </Container2>
      </Container>
    </ContainerRoot>
  )
}

export default Login