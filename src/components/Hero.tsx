
import SearchButton from './SearchButton'
import SearchInput from './SearchInput'

const Hero = () => {
	return (
		<main className="flex-1 flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center p-4 text-center">
			<h1 className='font-thin lg:text-5xl md:text-4xl sm:text-3xl text-text-pri '>CodeForcesStats</h1>
			<div className='flex justify-center items-center'>
				<SearchInput />
				<SearchButton />
			</div>

		</main>
	)
}

export default Hero
