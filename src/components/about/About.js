import React, { useState, useEffect } from 'react';
import Footer from '../includes/Footer';
import Navbar from '../includes/Navbar';
import team from '../../assets/about_images/team2.avif';
import { members } from './aboutData';
import { Spinner } from '../includes/Spinner';

export default function About() {
	const [loading, setLoading] = useState(true);

	//mocking loading delay for content to load
	useEffect(() => {
		setTimeout(() => {
		setLoading(false);
		}, 500);
	}, []);

	if (loading) {
		return <Spinner/>
	}

	return (
		<div className='screen-wrapper h-100'>
			<Navbar />

			<h2 className='screen-title'>To jsme my</h2>

			<img
				src={team}
				alt='3 women from lesbotoč'
				className='w-100'
				loading='eager'
			/>

			<div>
				<p className='mt-4 mb-4 pb-5 mx-auto about-paragraph text-start'>
					Jsme tři obyčejné ženské. Jedna z Prahy, druhá z Moravy a třetí od
					Plzně. Sešly jsme se z různých koutů ČR, abychom uspořádaly tu
					pravou seznamovací akci. Zjistily jsme totiž po letech úporného
					hledání, že lesby nemají pořádně kam jít a kde se najít. Chceme
					vytvářet prostor pro seznamovací akce pravidelně každý měsíc.
					Nenásilnou formou tak chceme docílit, abychom se všechny poznaly a
					nezbylo nám jediného opomíjeného živáčka v koutě.
				</p>
			</div>

			<div className='user-singles w-100 mb-5 d-flex flex-wrap justify-content-center'>
				{members.map((member) => (
					<div key={member.id} className='user-about d-flex flex-column align-items-center p-3'>
					<img src={member.img} loading='lazy' alt={member.name} />
					<p className='member-name mt-3'>{member.name}</p>
					<p className='user-paragraph text-start'>{member.intro}</p>
					</div>
				))}
			</div>
			<div className='position-relative mt-5'>
				<Footer />
			</div>
		</div>
	);
}
