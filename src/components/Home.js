import { About } from './About'
import { Hero } from './Hero'
import { Preview } from './Preview'

export const Home = () => {
    return (
        <div className="home bg-primaryFocus">
            <Hero/>
            <Preview/>
            <About/>
        </div>
    )
}
