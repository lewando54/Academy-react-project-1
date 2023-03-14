import React, { forwardRef } from 'react'
import Checkbox, { CheckboxProps } from '../../atoms/Checkbox/Checkbox'
import Label, { LabelProps } from '../../atoms/Label/Label'
import CheckboxWithLabelWrapper from './CheckboxWithLabel.style'

type CheckboxWithLabelProps = CheckboxProps & LabelProps

function CheckboxWithLabel (props: CheckboxWithLabelProps, ref: React.Ref<HTMLInputElement>): React.ReactElement {
  return (
        <CheckboxWithLabelWrapper>
            <Label htmlFor={props.id}>{props.children}</Label>
            <Checkbox color={props.color} ref={ref} id={props.id} />
        </CheckboxWithLabelWrapper>
  )
}

export default forwardRef(CheckboxWithLabel)
