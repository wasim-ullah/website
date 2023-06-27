'use client';

import Link from 'next/link';

const Index = () => {
    return (
        <div className='flex h-screen '>
            <div className='m-auto text-center'>
                <div className='inline-block'>
                    <h1 id='name'>Wasim</h1>
                    <h2 id='title'>Marketing Expert</h2>
                </div >
                <div style={{ height: '1.5rem' }} />
                <p id="social">
                    <Link href="https://twitter.com/wasimxullah" target="_blank">Twitter</Link> |{' '}
                    <Link href="https://www.linkedin.com/in/wasim-ullah" target="_blank">LinkedIn</Link> |{' '}
                    <Link href="https://cal.com/wasim" target="_blank">Cal.com</Link>
                </p>
            </div >
            <video autoPlay loop muted src="white1.mp4"></video>
            <video autoPlay loop muted src="white2.mp4"></video>
            <video autoPlay loop muted src="white1.webm"></video>
        </div >
    )
}

export default Index
