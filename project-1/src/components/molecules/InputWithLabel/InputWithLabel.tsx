import React, { forwardRef } from 'react'
import Input, { InputProps } from '../../atoms/Input/Input'
import Label, { LabelProps } from '../../atoms/Label/Label'
import StyledInputWithLabel from './InputWithLabel.style'

type InputWithLabelProps = InputProps & LabelProps

function InputWithLabel (props: InputWithLabelProps, ref: any): React.ReactElement {
  return (
        <StyledInputWithLabel>
            <Label htmlFor={props.id}>{props.children}</Label>
            <Input type={props.type} id={props.id} name={props.name} ref={ref} required={props.required}/>
        </StyledInputWithLabel>
  )
}

// imperative tutaj może rozszerzyć

export default forwardRef(InputWithLabel)
