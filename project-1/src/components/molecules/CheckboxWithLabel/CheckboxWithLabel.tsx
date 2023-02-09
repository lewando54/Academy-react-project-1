import React from 'react'
import Checkbox, { CheckboxProps } from '../../atoms/Checkbox/Checkbox'
import Label, { LabelProps } from '../../atoms/Label/Label'
import CheckboxWithLabelWrapper from './CheckboxWithLabel.style'

type CheckboxWithLabelProps = CheckboxProps & LabelProps

function CheckboxWithLabel (props: CheckboxWithLabelProps): React.ReactElement {
  return (
        <CheckboxWithLabelWrapper>
            <Label htmlFor={props.id}>{props.children}</Label>
            <Checkbox innerRef={props.innerRef} id={props.id} />
        </CheckboxWithLabelWrapper>
  )
}

export default CheckboxWithLabel
