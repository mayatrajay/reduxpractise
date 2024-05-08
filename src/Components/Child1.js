import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByValue } from '../features/showSlics';

function Child1() {
	const dispatch = useDispatch();

	const data = useSelector((c) => c.show.value)

  return (
	<div>
		<h1>Subdata {data}</h1>
		<button onClick={() => dispatch(increment())} >Click me</button>
		<button onClick={() => dispatch(incrementByValue(10))} >Click me</button>
	</div>
  )
}

export default Child1