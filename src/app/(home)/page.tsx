'use client'
import Container from '@/components/Container'
import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import { user } from '@/atom/user'
import { useSetRecoilState } from 'recoil'
import FloatingButton from '@/components/FloatingButton'

const MainPage = () => {
  return (
    <Container>
      <div>메인</div>
      <FloatingButton href='/products/upload'>+</FloatingButton>
    </Container>
  )
}

export default MainPage