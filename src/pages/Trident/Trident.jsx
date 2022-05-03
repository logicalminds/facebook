import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Trident.css';

export default function Trident() {
	const indicatorStyles = {
		display: 'inline-flex',
		marginRight: '10px',
		cursor: 'pointer',
	};
	return (
		<>
			<main className='ml-16 my-3 bg-gray-200'>
				<div className='mr-16'>
					<header className='flex justify-between items-center'>
						<img
							src='https://companies.naukri.com/ittrident-dev/wp-content/uploads/sites/22901/2017/12/trident-2-02-2.png'
							alt='itTrident logo'
							className='itTrident-logo'
						/>
						<nav>
							<ul className='header-nav-list flex hidden lg:flex'>
								<li className='mx-4 text-sm cursor-pointer hover:text-red-400'>
									HOME
								</li>
								<li className='mx-4 text-sm cursor-pointer hover:text-red-400'>
									ABOUT US
								</li>
								<li className='mx-4 text-sm cursor-pointer hover:text-red-400'>
									CARRERS
								</li>
								<li className='mx-4 text-sm cursor-pointer hover:text-red-400'>
									SERVICES
								</li>
								<li className='mx-4 text-sm cursor-pointer hover:text-red-400'>
									BLOG
								</li>
								<li className='mx-4 text-sm cursor-pointer hover:text-red-400'>
									GALLERY
								</li>
								<li className='mx-4 text-sm cursor-pointer hover:text-red-400'>
									CONTACT US
								</li>
							</ul>
						</nav>
					</header>
					<section className='flex'>
						<div className='home-content-image hidden sm:flex'>
							<img
								src='https://companies.naukri.com/ittrident-dev/wp-content/uploads/sites/22901/2017/12/trident-2-02-2.png'
								alt='itTrident logo'
							/>
						</div>
						<div className='home-content-list ml-36'>
							<ul>
								<li className='flex items-center gap-2'>
									<i className='home-list-icons fas fa-user bg-green-500 px-3 py-1.5 rounded-full my-3 text-2xl'></i>
									<p>Full stack management</p>
								</li>
								<li className='flex items-center gap-2'>
									<i className='home-list-icons fas fa-user bg-green-500 px-3 py-1.5 ml-20 rounded-full my-3 text-2xl'></i>
									<p>Project management support</p>
								</li>
								<li className='flex items-center gap-2'>
									<i className='home-list-icons fas fa-user bg-green-500 px-3 py-1.5 rounded-full my-3 text-2xl'></i>
									<p>Mobile development</p>
								</li>
								<li className='flex items-center gap-2'>
									<i className='home-list-icons fas fa-user bg-green-500 px-3 py-1.5 ml-20 rounded-full my-3 text-2xl'></i>
									<p>Quality assurance</p>
								</li>
								<li className='flex items-center gap-2'>
									<i className='home-list-icons fas fa-user bg-green-500 px-3 py-1.5 rounded-full my-3 text-2xl'></i>
									<p>Devops</p>
								</li>
							</ul>

							<div className='my-6'>
								<button className='bg-gray-300 px-5 rounded-lg text-sm py-4'>
									MORE ABOUT US
								</button>
								<button className='bg-gray-300 px-5 rounded-lg text-sm py-4 ml-5'>
									CONTACT TODAY
								</button>
							</div>
							<div className='contact-card flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<img
										src='https://companies.naukri.com/ittrident-dev/wp-content/uploads/sites/22901/2017/12/trident-2-02-2.png'
										alt='itTrident logo'
										className='w-20 h-20'
									/>
									<div>
										<p>+91-44-48550526</p>
										<p>info@tridentsqa.com</p>
									</div>
								</div>
								<i className='fas fa-times text-3xl font-light'></i>
							</div>
						</div>
					</section>

					<section className='my-10'>
						<ul className='flex'>
							<li>
								<img
									src='https://companies.naukri.com/ittrident-dev/wp-content/uploads/sites/22901/2017/12/trident-2-02-2.png'
									alt='itTrident logo'
								/>
							</li>
							<li>
								<img
									src='https://companies.naukri.com/ittrident-dev/wp-content/uploads/sites/22901/2017/12/trident-2-02-2.png'
									alt='itTrident logo'
								/>
							</li>
							<li>
								<img
									src='https://companies.naukri.com/ittrident-dev/wp-content/uploads/sites/22901/2017/12/trident-2-02-2.png'
									alt='itTrident logo'
								/>
							</li>
							<li>
								<img
									src='https://companies.naukri.com/ittrident-dev/wp-content/uploads/sites/22901/2017/12/trident-2-02-2.png'
									alt='itTrident logo'
								/>
							</li>
							<li>
								<img
									src='https://companies.naukri.com/ittrident-dev/wp-content/uploads/sites/22901/2017/12/trident-2-02-2.png'
									alt='itTrident logo'
								/>
							</li>
						</ul>
					</section>

					<section className='flex gap-10'>
						<div className='who-we-are-section'>
							<p className='who-we-are-text'>
								Who <span>We Are</span>
							</p>
							<p className='who-we-are-text-para'>
								At itTrident we do end to end IT services to help our customers
								to achieve their business goals. We have 10 years of industry
								experience of serving large number of comfort & confident
								clients of different sectors across the world. We started as 3
								members of team & now grown to more than 40 members team. Our
								team is more friendly to our clients, & they will help the
								customer to make their dream into reality. If you have an idea
								to make it reality we will definitely help with our team of
								expertise.
							</p>
						</div>
						<div className='who-we-are-section'>
							<p className='who-we-are-text'>
								What We <span>Offer</span>
							</p>
							<div className='what-we-offer-icons-wrapper flex border border-red-400'>
								<div>
									<div className='what-we-offer-icons flex items-center'>
										<i className='fas fa-user px-3 py-2 my-3 text-2xl'></i>
										<span className='ml-3'>Full Stack Development</span>
									</div>
									<div className='what-we-offer-icons flex items-center'>
										<i className='fas fa-user px-3 py-2 my-3 text-2xl'></i>
										<span className='ml-3'>Full Stack Development</span>
									</div>
									<div className='what-we-offer-icons flex items-center'>
										<i className='fas fa-user px-3 py-2 my-3 text-2xl'></i>
										<span className='ml-3'>Full Stack Development</span>
									</div>
								</div>
								<div>
									<div className='what-we-offer-icons flex items-center'>
										<i className='fas fa-user px-3 py-2 my-3 text-2xl'></i>
										<span className='ml-3'>Full Stack Development</span>
									</div>
									<div className='what-we-offer-icons flex items-center'>
										<i className='fas fa-user px-3 py-2 my-3 text-2xl'></i>
										<span className='ml-3'>Full Stack Development</span>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className='container bg-gray-300 h-screen'>
					<ul>
						<li className='flex items-center gap-2'>
							<i className='fas fa-user bg-green-500 p-2 rounded-full my-3'></i>
							<p>Full stack management</p>
						</li>
						<li className='flex items-center gap-2'>
							<i className='fas fa-user bg-green-500 p-2 ml-20 rounded-full my-3'></i>
							<p>Project management support</p>
						</li>
						<li className='flex items-center gap-2'>
							<i className='fas fa-user bg-green-500 p-2 rounded-full my-3'></i>
							<p>Mobile development</p>
						</li>
						<li className='flex items-center gap-2'>
							<i className='fas fa-user bg-green-500 p-2 ml-20 rounded-full my-3'></i>
							<p>Quality assurance</p>
						</li>
						<li className='flex items-center gap-2'>
							<i className='fas fa-user bg-green-500 p-2 rounded-full my-3'></i>
							<p>Devops</p>
						</li>
					</ul>
					<div className='flex justify-around mb-10'>
						<div className='flex bg-white shadow-md rounded-md'>
							<p className='successful-travel-numbers rounded-l-md p-3 font-medium text-white text-2xl'>
								50+
							</p>
							<p className='p-3 font-medium text-xl'>Employees</p>
						</div>
						<div className='flex bg-white shadow-md rounded-md'>
							<p className='successful-travel-numbers rounded-l-md p-3 font-medium text-white text-2xl'>
								150+
							</p>
							<p className='p-3 font-medium text-xl'>Projects</p>
						</div>
						<div className='flex bg-white shadow-md rounded-md'>
							<p className='successful-travel-numbers rounded-l-md p-3 font-medium text-white text-2xl'>
								100+
							</p>
							<p className='p-3 font-medium text-xl'>Clients</p>
						</div>
					</div>
				</div>
				<Carousel
					infiniteLoop
					showIndicators={true}
					showArrows={false}
					showStatus={false}
					renderIndicator={(onClickHandler, isSelected, index, label) => (
						<li
							style={{
								...indicatorStyles,
								opacity: isSelected ? '1' : '0.7',
								fontSize: isSelected ? '0.7rem' : '0.4rem',
								color: isSelected ? '#ef7321' : 'grey',
							}}
							onClick={onClickHandler}
							value={index}
							key={index}
							role='button'>
							{isSelected ? (
								<i className='fas fa-circle'></i>
							) : (
								<i className='far fa-circle'></i>
							)}
						</li>
					)}
					className='max-w-full'>
					<div className='p-5 pb-10'>
						<div>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Eveniet perspiciatis, optio aut aperiam atque nisi, maxime
								consequatur provident labore veniam quia reprehenderit iste
								culpa vitae.
							</p>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU'
								alt=''
								className='user-img'
							/>
						</div>
					</div>
					<div>
						<div>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Eveniet perspiciatis, optio aut aperiam atque nisi, maxime
								consequatur provident labore veniam quia reprehenderit iste
								culpa vitae.
							</p>
							<img src='/facebook-icon.png' alt='' className='user-img' />
						</div>
					</div>
					<div>
						<div>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Eveniet perspiciatis, optio aut aperiam atque nisi, maxime
								consequatur provident labore veniam quia reprehenderit iste
								culpa vitae.
							</p>
							<img src='/user.jpg' alt='' className='user-img' />
						</div>
					</div>
				</Carousel>
			</main>
		</>
	);
}
