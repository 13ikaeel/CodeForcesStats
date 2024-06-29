import React from 'react'

const Header = () => {
	return (
		<header className="px-10 flex items-center justify-between gap-4 bg-pri">
			<span className='text-text-sec font-semibold text-2xl'>
				CodeForcesStats
			</span>

			<ul className='flex gap-3'>
				<a href="" className="bg-accent p-4">
					<li className="">
						<span className="text-text-sec mr-2">GitHub</span>
						<i className="fa-brands fa-github fill-current text-text-sec"></i>
					</li>
				</a>
				
			</ul>

		</header>
	)
}

export default Header
