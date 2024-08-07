import React from 'react'
import Typography from '@/components/Typography'
import { Navbar } from '../../components/Navbar'

export default function ErrorPage() {
	return (
		<>
			<Navbar />
			<Typography variant='h1'>
				Something wrong happened.
			</Typography>
		</>
	)
}