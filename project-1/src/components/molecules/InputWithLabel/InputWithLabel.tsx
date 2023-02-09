import React from 'react'
import Input, { InputProps } from '../../atoms/Input/Input'
import Label, { LabelProps } from '../../atoms/Label/Label'
import StyledInputWithLabel from './InputWithLabel.style'

type InputWithLabelProps = InputProps & LabelProps

function InputWithLabel (props: InputWithLabelProps): React.ReactElement {
  return (
        <StyledInputWithLabel>
            <Label htmlFor={props.id}>{props.children}</Label>
            <Input type={props.type} id={props.id} name={props.name} innerRef={props.innerRef} required={props.required}/>
        </StyledInputWithLabel>
  )
}

export default InputWithLabel
