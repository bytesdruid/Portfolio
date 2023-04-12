// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Joshua Bloom" />

            <div className='header__content'>
                <h1>Hi, I'm Joshua Bloom</h1>
                <p>Blockchain Engineer</p>
                <button className='button'>bloomblockchain@gmail.com</button>
            </div>
        </section>
    );
}

export default Header;