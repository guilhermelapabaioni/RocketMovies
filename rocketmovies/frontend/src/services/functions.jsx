import starGrade from '../assets/star-grade.svg'
import starNoGrade from '../assets/star-noGrade.svg'

export function validateGrade(data) {
  if (data === 5) {
    return [
      <img src={starGrade} key={1} alt="" />,
      <img src={starGrade} key={2} alt="" />,
      <img src={starGrade} key={3} alt="" />,
      <img src={starGrade} key={4} alt="" />,
      <img src={starGrade} key={5} alt="" />
    ]
  } else if (data === 4) {
    return [
      <img src={starGrade} key={1} alt="" />,
      <img src={starGrade} key={2} alt="" />,
      <img src={starGrade} key={3} alt="" />,
      <img src={starGrade} key={4} alt="" />,
      <img src={starNoGrade} key={5} alt="" />
    ]
  } else if (data === 3) {
    return [
      <img src={starGrade} key={1} alt="" />,
      <img src={starGrade} key={2} alt="" />,
      <img src={starGrade} key={3} alt="" />,
      <img src={starNoGrade} key={4} alt="" />,
      <img src={starNoGrade} key={5} alt="" />
    ]
  } else if (data === 2) {
    return [
      <img src={starGrade} key={1} alt="" />,
      <img src={starGrade} key={2} alt="" />,
      <img src={starNoGrade} key={3} alt="" />,
      <img src={starNoGrade} key={4} alt="" />,
      <img src={starNoGrade} key={5} alt="" />
    ]
  } else if (data === 1) {
    return [
      <img src={starGrade} key={1} alt="" />,
      <img src={starNoGrade} key={2} alt="" />,
      <img src={starNoGrade} key={3} alt="" />,
      <img src={starNoGrade} key={4} alt="" />,
      <img src={starNoGrade} key={5} alt="" />
    ]
  } else if (data === 0) {
    return [
      <img src={starNoGrade} key={1} alt="" />,
      <img src={starNoGrade} key={2} alt="" />,
      <img src={starNoGrade} key={3} alt="" />,
      <img src={starNoGrade} key={4} alt="" />,
      <img src={starNoGrade} key={5} alt="" />
    ]
  }
}