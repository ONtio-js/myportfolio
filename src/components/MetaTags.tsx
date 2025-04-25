import { Helmet } from 'react-helmet';

const MetaTags = () => {
	return (
		<Helmet>
			<title>
				Theophilus Nkwuda - Expert Full Stack Developer | Web & Mobile
				App Development
			</title>
			<meta
				name='description'
				content='Expert Full Stack Developer Theophilus Nkwuda - Specializing in React, Node.js, TypeScript, and mobile app development. Professional software engineer creating innovative web and mobile solutions.'
			/>
			<meta
				name='keywords'
				content='full stack developer, expert developer, web developer, mobile app developer, React developer, Node.js developer, software engineer, TypeScript developer, Next.js developer, professional developer, Lagos developer, Nigeria developer, portfolio'
			/>
			<link
				rel='canonical'
				href='https://theophilusnk.dev'
			/>
			<meta
				property='og:title'
				content='Theophilus Nkwuda - Expert Full Stack Developer | Web & Mobile Solutions'
			/>
			<meta
				property='og:description'
				content='Professional Full Stack Developer specializing in React, Node.js, and mobile app development. Expert in creating innovative web and mobile solutions with modern technologies.'
			/>
			<meta
				property='og:url'
				content='https://theophilusnk.dev'
			/>
			<meta
				property='og:image'
				content='https://theophilusnk.dev/nkwudatheophilus.png'
			/>
			<meta
				property='og:type'
				content='website'
			/>
			<meta
				name='twitter:card'
				content='summary_large_image'
			/>
			<meta
				name='twitter:title'
				content='Theophilus Nkwuda - Expert Full Stack Developer | Web & Mobile Solutions'
			/>
			<meta
				name='twitter:description'
				content='Professional Full Stack Developer specializing in React, Node.js, and mobile app development. Expert in creating innovative web and mobile solutions with modern technologies.'
			/>
			<meta
				name='twitter:image'
				content='https://theophilusnk.dev/nkwudatheophilus.png'
			/>
			<script type='application/ld+json'>{`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Theophilus Nkwuda",
      "url": "https://theophilusnk.dev",
      "image": "https://theophilusnk.dev/nkwudatheophilus.png",
      "description": "Expert Full Stack Developer specializing in React, Node.js, and mobile app development. Professional software engineer creating innovative web and mobile solutions.",
      "jobTitle": "Expert Full Stack Developer",
      "knowsAbout": ["Web Development", "Mobile App Development", "React", "Node.js", "TypeScript", "Next.js", "MongoDB", "AWS", "Docker"],
      "sameAs": [
        "https://www.facebook.com/tiocode",
        "https://x.com/tioc0de",
        "https://www.instagram.com/tioc0de",
        "https://www.linkedin.com/in/ontiojs1",
        "https://github.com/ONtio-js"
      ]
    }
    `}</script>
		</Helmet>
	);
};

export default MetaTags;
