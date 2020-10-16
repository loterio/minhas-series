import React, { useState } from 'react'

const NovoGenero = () => {
	return (
		<div className='container'>
			<h1>Novo Gênero</h1>
			<form>
				<div className='form-group'>
					<label for='exampleInputEmail1'>Email address</label>
					<input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email'>
					<small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
				</div>
			</form>
		</div>
	)
}

export default NovoGenero
