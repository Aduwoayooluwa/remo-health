import Patients from '@/doctor/Patients'
import { patients } from '@/utils/utils'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
      <div>
          <Patients patients={patients} />
    </div>
  )
}

export default page