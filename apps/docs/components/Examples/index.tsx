'use client'
import React from 'react'
import { Fence } from '../Fence'
import reactElementToJSXString from 'react-element-to-jsx-string'

// Examples
import { accordion_examples } from './accordion'

// Map
const examples: Record<string, JSX.Element> = {
  ...accordion_examples,
}

export function Examples({ name }: { name: string }) {
  const Component = examples[name]

  return (
    <>
      <div>{Component}</div>
      <Fence language="jsx">{reactElementToJSXString(Component)}</Fence>
    </>
  )
}
