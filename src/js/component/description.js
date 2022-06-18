import React, { useState } from 'react'

export const Description = (props)=> {


    return (
        <>
        <div className="jumbotron">
			<div className="d-flex">
			<img className="m-2" src="https://picsum.photos/800/600/?blur" />
			<div className="d-flex-column">
			<h1 id="article">{props.name}</h1>
			<p className="lead m-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p></div>
			</div>
			<hr className="my-4" />
			<table className="table text-secondary">
				<thead>
					<tr>
					<th className="table-danger text-danger" scope="col">{props.label1}</th>
					<th className="table-danger text-danger" scope="col">{props.label2}</th>
					<th className="table-danger text-danger" scope="col">{props.label3}</th>
					<th className="table-danger text-danger" scope="col">{props.label4}</th>
					<th className="table-danger text-danger" scope="col">{props.label5}</th>
					<th className="table-danger text-danger" scope="col">{props.label6}</th>
					</tr>
				</thead>
				<tbody>
					<tr className="table-warning text-danger">
					<td>{props.data1}</td>
					<td>{props.data2}</td>
					<td>{props.data3}</td>
					<td>{props.data4}</td>
					<td>{props.data5}</td>
					<td>{props.data6}</td>
					</tr>
				</tbody>
			</table>
		</div>
        </>
    )
}