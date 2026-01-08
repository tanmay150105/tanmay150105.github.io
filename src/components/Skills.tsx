import React from 'react';

const skillCategories = [
	{
		title: 'Hardware Systems & Repair',
		skills: [
			'Device disassembly & reassembly',
			'Fault diagnostics & troubleshooting',
			'Sensor & module experimentation',
			'Circuit handling & prototype testing',
		],
	},
	{
		title: 'Programming Foundations',
		skills: ['Strong in C++ (DSA & OOP)','Python & JavaScript', 'SQL for database queries','HTML & CSS',],
	},
	{
		title: 'Web Development & Backend ',
		skills: [
			'React.js (frontend)',
			'Node.js & Express.js (backend)',
			'MySQL integration',
			'JWT‑style authentication flows',
		],
	},
	{
		title: 'Tools & Platforms',
		skills: [
			'Git & GitHub',
			'VS Code',
			'Kaggle Notebooks',
			'Soldering iron, multimeter, screwdriver set',
		],
	},
	{
		title: 'Soft Skills',
		skills: [
			'Curiosity & continuous learning',
			'Persistence & adaptability',
			'Problem‑solving mindset',
			'Team collaboration & communication',
		],
	},
];

export function Skills() {
	return (
		<section id="skills" className="py-20 px-6" style={{ background: 'white' }}>
			<div className="max-w-5xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="mb-4" style={{ color: 'var(--deep-navy)' }}>
						Skills
					</h2>
					<div
						className="w-24 h-1 mx-auto rounded-full"
						style={{ background: 'var(--primary-mint)' }}
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillCategories.map((cat, idx) => (
						<div
							key={idx}
							className="rounded-2xl p-6 bg-white border border-[var(--slate-gray)] shadow-md"
						>
							<h3
								className="mb-3 text-lg font-semibold"
								style={{ color: 'var(--primary-mint)' }}
							>
								{cat.title}
							</h3>
							<ul className="list-disc list-inside text-[var(--deep-navy)]">
								{cat.skills.map((skill, i) => (
									<li key={i} className="mb-1">
										{skill}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}