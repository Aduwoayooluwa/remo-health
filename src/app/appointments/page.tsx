import Appointments from '@/doctor/Appointments'
import { appointmentsData } from '@/utils/utils'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
      <div>
          <Appointments appointments={appointmentsData} />
    </div>
  )
}

export default page