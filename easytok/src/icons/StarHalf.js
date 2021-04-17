import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StarHalf(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={36}
      height={36}
      {...props}
    >
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
    </Svg>
  )
}

export default StarHalf

