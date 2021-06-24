import React from 'react'
import moment  from 'moment'

const ReleaseDate = (props) => {
    const { date } = props

    const date_string = moment(date).format('DD MMM YYYY')
    return (
        <div>
          <span className="text-xs pl-3">{ date_string }</span>
        </div>
    )
}

export default ReleaseDate